import { MenuItem } from "@material-ui/core"
import React from "react"
import SingularNotification from "./SingularNotification"

function NotificationsList({ notifications, handleClose }) {
    if (!notifications || notifications.length <= 0)
        return <MenuItem onClick={handleClose}>You have no notifications yet.</MenuItem>

    return notifications.map((notification) => (
        <MenuItem key={notification.createdAt} onClick={handleClose}>
            <SingularNotification notification={notification} />
        </MenuItem>
    ))
}

export default NotificationsList
