import { MenuItem } from "@material-ui/core"
import React, { forwardRef } from "react"
import SingularNotification from "./SingularNotification"

//have to take ref to avoid errors because MUI menu sends it
const NotificationsList = forwardRef(({ notifications, handleClose }, ref) => {
    if (!notifications || notifications.length <= 0)
        return <MenuItem onClick={handleClose}>You have no notifications yet.</MenuItem>

    return notifications.map((notification) => (
        <MenuItem key={notification.createdAt} onClick={handleClose}>
            <SingularNotification notification={notification} />
        </MenuItem>
    ))
})

export default NotificationsList
