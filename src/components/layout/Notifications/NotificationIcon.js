import React from "react"

import { Badge } from "@material-ui/core"
import { Notifications as MUINotificationsIcon } from "@material-ui/icons"

function NotificationIcon({ notifications }) {
    if (!notifications || notifications.length <= 0) return <MUINotificationsIcon />

    const numberOfUnreadNotifications = notifications.filter((not) => not.read === false).length

    if (numberOfUnreadNotifications <= 0) return <MUINotificationsIcon />

    return (
        <Badge badgeContent={numberOfUnreadNotifications} color="secondary">
            <MUINotificationsIcon />
        </Badge>
    )
}

export default NotificationIcon
