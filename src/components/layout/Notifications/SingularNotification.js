import React from "react"

import { Typography } from "@material-ui/core"
import { Favorite as FavoriteIcon, Chat as ChatIcon } from "@material-ui/icons"

import { Link } from "react-router-dom"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

function SingularNotification({ notification }) {
    dayjs.extend(relativeTime)
    const time = dayjs(notification.createdAt).fromNow()
    let verb = ""
    let icon = ""
    const iconColor = notification.read ? "primary" : "secondary"

    if (notification.type === "like") {
        verb = "liked"
        icon = <FavoriteIcon color={iconColor} style={{ marginRight: 10 }} />
    } else {
        verb = "commented on"
        icon = <ChatIcon color={iconColor} style={{ marginRight: 10 }} />
    }

    return (
        <>
            {icon}

            <Link to={`/user/${notification.recipient}/scream/${notification.screamId}`}>
                <Typography color="textPrimary" variant="body1">
                    {notification.sender} {verb} your scream {time}
                </Typography>
            </Link>
        </>
    )
}

export default SingularNotification
