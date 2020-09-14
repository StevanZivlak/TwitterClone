import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

import MyButton from "../../util/MyButton"
import ScreamLikeButton from "./ScreamLikeButton"
import ScreamDeleteButton from "./ScreamDeleteButton"
import ScreamDialog from "./ScreamDialog"

import { useSelector } from "react-redux"

// MUI stuff
import { withStyles } from "@material-ui/core/styles"
import { Typography, Card, CardMedia, CardContent } from "@material-ui/core"
import { Chat as ChatIcon } from "@material-ui/icons"

const styles = {
    card: {
        position: "relative",
        display: "flex",
        marginBottom: 20
    },
    image: {
        minWidth: 200,
        maxHeight: 200
    },
    content: {
        padding: 25,
        objectFit: "cover"
    },
    wrappedText: {
        wordWrap: "break-word"
    }
}

function Scream(props) {
    const {
        authenticated,
        credentials: { handle }
    } = useSelector((state) => state.user)

    const {
        classes, // eslint-disable-next-line
        scream: { body, commentCount, createdAt, imageUrl, likeCount, userHandle, screamId }
    } = props

    dayjs.extend(relativeTime)

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.image} image={imageUrl} tooltip="Profile image" />
            <CardContent className={classes.content}>
                <Typography
                    variant="h5"
                    color="primary"
                    component={Link}
                    to={`/user/${userHandle}`}
                >
                    {userHandle}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {dayjs(createdAt).fromNow()}
                </Typography>
                <Typography variant="body1" color="textPrimary" className={classes.wrappedText}>
                    {body}
                </Typography>
                <ScreamLikeButton screamId={screamId} />
                <span>{likeCount} likes</span>
                <MyButton tooltip="comments">
                    <ChatIcon color="primary" />
                </MyButton>
                <span>{commentCount} comments</span>
                {authenticated && userHandle === handle ? (
                    <ScreamDeleteButton screamId={screamId} />
                ) : null}
                <ScreamDialog
                    screamId={screamId}
                    userHandle={userHandle}
                    openDialog={props.openDialog}
                />
            </CardContent>
        </Card>
    )
}

Scream.propTypes = {
    scream: PropTypes.object.isRequired
}

export default withStyles(styles)(Scream)
