import React, { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import dayjs from "dayjs"
import { Link } from "react-router-dom"

import { logoutUser, uploadImage } from "../../redux/actions/userActions"
import MyButton from "../../util/MyButton"
import EditDetails from "./EditDetails"
import ProfileSkeleton from "../../util/ProfileSkeleton"

// MUI stuff
import { makeStyles, Paper, Typography, Button, Link as MuiLink } from "@material-ui/core"
import {
    Edit as EditIcon,
    LocationOn,
    Link as LinkIcon,
    CalendarToday,
    KeyboardReturn as KeyboardReturnIcon
} from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({ ...theme.profileComponent }))

function Profile() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    const {
        credentials: { handle, createdAt, imageUrl, bio, website, location },
        loading,
        authenticated
    } = user
    const classes = useStyles()

    const imageInputRef = useRef(null)

    const handleImageChange = (e) => {
        const image = e.target.files[0]
        const formData = new FormData()
        formData.append("image", image, image.name) //TODO: delete image.name part because it's probably superfluous
        dispatch(uploadImage(formData))
    }

    if (loading) return <ProfileSkeleton />
    if (!authenticated)
        return (
            <Paper className={classes.paper}>
                <Typography variant="body2" align="center">
                    No profile found, please login again
                </Typography>
                <div className={classes.buttons}>
                    <Button variant="contained" color="primary" component={Link} to="/login">
                        Login
                    </Button>
                    <Button variant="contained" color="secondary" component={Link} to="/signup">
                        Signup
                    </Button>
                </div>
            </Paper>
        )
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={imageUrl} alt="profile" className="profile-image" />
                    <input
                        type="file"
                        id="imageInput"
                        onChange={handleImageChange}
                        hidden
                        ref={imageInputRef}
                    />
                    <MyButton
                        onClick={(e) => imageInputRef.current.click()}
                        tooltip="Change profile pic"
                        buttonClassName="button"
                    >
                        <EditIcon color="primary" />
                    </MyButton>
                </div>
                <hr />
                <div className="profile-details">
                    <MuiLink component={Link} to={`/user/${handle}`} color="primary" variant="h5">
                        @{handle}
                    </MuiLink>
                    <hr />
                    {bio && <Typography variant="body2">{bio}</Typography>}
                    <hr />
                    {location && (
                        <>
                            <LocationOn color="primary" /> <span>{location}</span>
                            <hr />
                        </>
                    )}
                    {website && (
                        <>
                            <LinkIcon color="primary" />
                            <a href={website} target="_blank" rel="noopener noreferrer">
                                {" "}
                                {website}
                            </a>
                            <hr />
                        </>
                    )}
                    <CalendarToday color="primary" />{" "}
                    <span>Joined {dayjs(createdAt).format("MMM YYYY")}</span>
                </div>
                <MyButton onClick={(e) => dispatch(logoutUser())} tooltip="Logout">
                    <KeyboardReturnIcon color="primary" />
                </MyButton>
                <EditDetails />
            </div>
        </Paper>
    )
}

export default Profile
