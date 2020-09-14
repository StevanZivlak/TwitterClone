import React from "react"
import { makeStyles, Paper, Link as MuiLink, Typography } from "@material-ui/core"
import { LocationOn, Link as LinkIcon, CalendarToday } from "@material-ui/icons"
import { Link } from "react-router-dom"
import dayjs from "dayjs"

const useStyles = makeStyles((theme) => ({
    ...theme.profileComponent
}))

function StaticProfile(props) {
    const classes = useStyles()
    const { handle, bio, imageUrl, createdAt, location, website } = props.profile

    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={imageUrl} alt="profile" className="profile-image" />
                </div>
                <hr />
                <div className="profile-details">
                    <MuiLink component={Link} to={`/users/${handle}`} color="primary" variant="h5">
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
            </div>
        </Paper>
    )
}

export default StaticProfile
