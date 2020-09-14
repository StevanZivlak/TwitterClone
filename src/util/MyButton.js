import React from "react"
import { IconButton, Tooltip } from "@material-ui/core"

function MyButton(props) {
    const { children, onClick, tooltip, tooltipClassName, buttonClassName } = props

    return (
        <Tooltip title={tooltip} className={tooltipClassName} placement="top">
            <IconButton onClick={onClick} className={buttonClassName}>
                {children}
            </IconButton>
        </Tooltip>
    )
}

export default MyButton
