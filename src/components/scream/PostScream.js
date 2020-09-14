import React, { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { postScream, clearErrors } from "../../redux/actions/dataActions"
import MyButton from "../../util/MyButton"

import { Add as AddIcon, Close as CloseIcon } from "@material-ui/icons"

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    makeStyles,
    CircularProgress
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    ...theme.postScream
}))

function PostScream() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const UI = useSelector((state) => state.UI)

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [screamBody, setScreamBody] = useState("")

    const handleClose = (e) => {
        setIsDialogOpen(false)
        dispatch(clearErrors())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(postScream({ body: screamBody }))
    }

    useEffect(() => {
        //does some cleanup on the end
        const isErrorsEmpty = Object.keys(UI.errors).length === 0
        if (isErrorsEmpty && !UI.isLoading) {
            setScreamBody("")
            setIsDialogOpen(false)
        }
    }, [UI.errors, UI.isLoading])

    return (
        <>
            <MyButton tooltip="Create a scream!" onClick={(e) => setIsDialogOpen(true)}>
                <AddIcon />
            </MyButton>
            <Dialog open={isDialogOpen} onClose={handleClose} fullWidth>
                <DialogTitle>Post a new scream</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="screamBody"
                        type="text"
                        fullWidth
                        placeholder="Enter your scream here."
                        multiline
                        rows={4}
                        error={UI.errors.body ? true : false}
                        helperText={UI.errors.body}
                        className={classes.TextField}
                        onChange={(e) => setScreamBody(e.target.value)}
                        value={screamBody}
                    />
                </DialogContent>
                <DialogActions>
                    <MyButton
                        tooltip="Close"
                        onClick={handleClose}
                        tooltipClassName={classes.closeButton}
                    >
                        <CloseIcon />
                    </MyButton>
                    <Button
                        type="submit"
                        onClick={handleSubmit}
                        color="primary"
                        variant="contained"
                        className={classes.submitButton}
                        disabled={UI.isLoading}
                    >
                        Submit
                        {UI.isLoading && (
                            <CircularProgress
                                size={20}
                                color="primary"
                                className={classes.progressSpinner}
                            />
                        )}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default PostScream
