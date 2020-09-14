import { Menu } from "@material-ui/core"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { markNotificationsRead } from "../../../redux/actions/userActions"
// Internal
import MyButton from "../../../util/MyButton"
import NotificationIcon from "./NotificationIcon"
import NotificationsList from "./NotificationsList"

function Notifications(props) {
    const dispatch = useDispatch()
    const [anchorEl, setAnchorEl] = useState(null)
    const notifications = useSelector((state) => state.user.notifications)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
    }

    const onMenuOpened = (e) => {
        const unreadNotificationIds = notifications
            .filter((not) => !not.read)
            .map((not) => not.notificationId)
        dispatch(markNotificationsRead(unreadNotificationIds))
    }

    return (
        <>
            <MyButton tooltip="Notifications" onClick={handleClick}>
                <NotificationIcon notifications={notifications} />
            </MyButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onEntered={onMenuOpened}
            >
                <NotificationsList notifications={notifications} handleClose={handleClose} />
            </Menu>
        </>
    )
}

export default Notifications
