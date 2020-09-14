import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteScream } from "../../redux/actions/dataActions"

import MyButton from "../../util/MyButton"
import { DeleteOutline as DeleteOutlineIcon } from "@material-ui/icons"
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
    DialogContent,
    DialogContentText
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    ...theme.screamDeleteButton
}))

function ScreamDeleteButton({ screamId }) {
    const dispatch = useDispatch()
    const classes = useStyles()

    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const handleClose = () => {
        setIsDialogOpen(false)
    }

    const handleDeletion = () => {
        setIsDialogOpen(false)
        dispatch(deleteScream(screamId))
    }

    return (
        <>
            <MyButton
                tooltip="Delete scream"
                onClick={(e) => setIsDialogOpen(true)}
                buttonClassName={classes.deleteButton}
            >
                <DeleteOutlineIcon color="secondary" />
            </MyButton>

            <Dialog open={isDialogOpen} onClose={handleClose} fullWidth>
                <DialogTitle>Are you sure you want to delete this scream?</DialogTitle>
                <DialogContent>
                    <DialogContentText>This action cannot be undone.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleDeletion} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ScreamDeleteButton
