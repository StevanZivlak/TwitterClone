import React, { useState } from "react"
import { Button, Grid, TextField, makeStyles } from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { submitComment } from "../../redux/actions/dataActions"

const useStyles = makeStyles((theme) => ({
    ...theme.screamDialog,
    ...theme.nonPalette,
    ...theme.screamDialogComments
}))

function CommentForm({ screamId }) {
    const dispatch = useDispatch()
    const classes = useStyles()
    const errors = useSelector((state) => state.UI.errors)
    const authenticated = useSelector((state) => state.user.authenticated)
    const [commentBody, setCommentBody] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(submitComment(screamId, { body: commentBody }))
        setCommentBody("")
    }

    return authenticated ? (
        <Grid item sm={12} style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit}>
                <TextField
                    type="text"
                    label="Comment on a scream."
                    error={errors.comment ? true : false}
                    helperText={errors.comment}
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                    fullWidth
                    className={classes.textField}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    type="submit"
                >
                    Submit
                </Button>
            </form>
            <hr className={classes.visibleSeparator} />
        </Grid>
    ) : null
}

export default CommentForm
