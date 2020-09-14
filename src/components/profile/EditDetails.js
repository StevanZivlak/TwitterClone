import React, { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { editUserDetails } from "../../redux/actions/userActions"
import MyButton from "../../util/MyButton"

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    makeStyles
} from "@material-ui/core"

import { Edit as EditIcon } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    ...theme.profileComponent,
    button: { float: "right" }
}))

function EditDetails() {
    const dispatch = useDispatch()

    const classes = useStyles()

    const userCredentials = useSelector((state) => state.user.credentials)

    const [bio, setBio] = useState("")
    const [website, setWebsite] = useState("")
    const [location, setLocation] = useState("")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        mapUserDetailsToState(userCredentials) //TODO: maybe not okay to hide.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleOpen = (e) => {
        setOpen(true)
        mapUserDetailsToState(userCredentials)
    }

    const handleClose = (e) => {
        setOpen(false)
    }

    const handleSubmit = (e) => {
        const userDetails = {
            bio: bio,
            location: location,
            website: website
        }
        dispatch(editUserDetails(userDetails))
        handleClose()
    }

    const mapUserDetailsToState = (userCredentials) => {
        setBio(userCredentials.bio ? userCredentials.bio : "")
        setWebsite(userCredentials.website ? userCredentials.website : "")
        setLocation(userCredentials.email ? userCredentials.email : "")
    }

    return (
        <>
            <MyButton onClick={handleOpen} tooltip="Edit details" buttonClassName={classes.button}>
                <EditIcon color="primary" />
            </MyButton>
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Edit your details</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Bio"
                        type="email"
                        fullWidth
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        multiline
                        rows="3"
                    />
                    <TextField
                        label="Website"
                        type="text"
                        fullWidth
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    <TextField
                        label="Location"
                        type="text"
                        fullWidth
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default EditDetails
