import React, { Fragment } from "react"
import { Grid, makeStyles, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
import dayjs from "dayjs"

const useStyles = makeStyles((theme) => ({
    ...theme.screamDialog,
    ...theme.screamDialogComments
}))

function Comments({ comments }) {
    const classes = useStyles()

    return (
        <>
            <Grid container>
                {comments.map((comment, index) => (
                    <Fragment key={comment.createdAt}>
                        <Grid item sm={12}>
                            <Grid container className={classes.commentBody}>
                                <Grid item sm={2}>
                                    <img
                                        src={comment.userImage}
                                        alt="comment"
                                        className={classes.commentImage}
                                    />
                                </Grid>
                                <Grid item sm={9}>
                                    <div className={classes.commentData}>
                                        <Typography
                                            variant="h6"
                                            color="primary"
                                            component={Link}
                                            to={`user/${comment.userHandle}`}
                                        >
                                            {comment.userHandle}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {dayjs(comment.createdAt).format(
                                                "h:mm a, MMMM D, YYYY"
                                            )}
                                        </Typography>
                                        <hr className={classes.invisibleSeparator} />
                                        <Typography variant="body1">{comment.body}</Typography>
                                    </div>
                                </Grid>
                            </Grid>
                            {index !== comments.length - 1 ? (
                                <hr className={classes.visibleSeparator} />
                            ) : null}
                        </Grid>
                    </Fragment>
                ))}
            </Grid>
        </>
    )
}

export default Comments
