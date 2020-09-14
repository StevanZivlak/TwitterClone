import React, { useState, useEffect } from "react"
import MyButton from "../../util/MyButton"
import ScreamLikeButton from "./ScreamLikeButton"
import Comments from "./Comments"
import CommentForm from "./CommentForm"
import dayjs from "dayjs"
import { useSelector, useDispatch } from "react-redux"

import {
    Chat as ChatIcon,
    Close as CloseIcon,
    UnfoldMore as UnfoldMoreIcon
} from "@material-ui/icons"

import { getScream, clearErrors } from "../../redux/actions/dataActions"

import { Link } from "react-router-dom"

import {
    Dialog,
    DialogContent,
    makeStyles,
    CircularProgress,
    Grid,
    Typography
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    ...theme.screamDialog
}))

function ScreamDialog(props) {
    const { screamId, userHandle } = props

    const classes = useStyles()
    const dispatch = useDispatch()
    const UI = useSelector((state) => state.UI)
    const scream = useSelector((state) => state.data.scream)

    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [oldPath, setOldPath] = useState("")

    const handleClose = (e) => {
        window.history.pushState(null, null, oldPath)
        setIsDialogOpen(false)
        dispatch(clearErrors())
    }

    const handleOpen = (e) => {
        let oldPath = window.location.pathname
        const newPath = `/user/${userHandle}/scream/${screamId}`
        window.history.pushState(null, null, newPath)
        if (oldPath === newPath) oldPath = `/user/${userHandle}`
        setOldPath(oldPath)

        setIsDialogOpen(true)
        dispatch(getScream(screamId))
    }

    useEffect(() => {
        if (props.openDialog) {
            handleOpen()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.openDialog])

    return (
        <>
            <MyButton onClick={handleOpen} tooltip="Expand" tooltipClassName={classes.expandButton}>
                <UnfoldMoreIcon color="primary" />
            </MyButton>
            <Dialog
                open={isDialogOpen}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
                className={classes.dialog}
            >
                <DialogContent className={classes.dialogContent}>
                    {UI.isLoading ? (
                        <div className={classes.centeredProgressCircle}>
                            <CircularProgress size={200} thickness={2} />
                        </div>
                    ) : (
                        <Grid container>
                            <Grid item sm={5}>
                                <img
                                    src={scream.imageUrl}
                                    alt="Profile"
                                    className={classes.profileImage}
                                />
                            </Grid>
                            <Grid item sm={7}>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    component={Link}
                                    to={`/user/${userHandle}`}
                                >
                                    @{userHandle}
                                </Typography>
                                <hr className={classes.invisibleSeparator} />
                                <Typography variant="body2" color="textSecondary">
                                    {dayjs(scream.createdAt).format("h:mm a, MMMM D, YYYY")}
                                </Typography>
                                <hr className={classes.invisibleSeparator} />
                                <Typography variant="body1" className={classes.wrappedText}>
                                    {scream.body}
                                </Typography>
                                <ScreamLikeButton screamId={screamId} />
                                <span>{scream.likeCount} likes</span>
                                <MyButton tooltip="comments">
                                    <ChatIcon color="primary" />
                                </MyButton>
                                <span>{scream.commentCount} comments</span>
                            </Grid>
                            <hr className={classes.visibleSeparator} />
                            <CommentForm screamId={screamId} />
                            <Comments comments={scream.comments} />
                        </Grid>
                    )}
                </DialogContent>

                <MyButton
                    onClick={handleClose}
                    tooltipClassName={classes.closeButton}
                    tooltip="Close"
                >
                    <CloseIcon />
                </MyButton>
            </Dialog>
        </>
    )
}

export default ScreamDialog
