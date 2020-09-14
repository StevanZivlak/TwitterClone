// MUI stuff
import { makeStyles, Paper } from "@material-ui/core"
import { CalendarToday, Link as LinkIcon, LocationOn } from "@material-ui/icons"
import React from "react"
// Internal
import NoImg from "../images/emptyProfileImage.png"

const useStyles = makeStyles((theme) => ({
    ...theme.profileComponent,
    ...theme.screamSkeleton,
    ...theme.profileSkeleton
}))

function ProfileSkeleton() {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className="image-wrapper">
                    <img src={NoImg} alt="profile" className="profile-image" />
                </div>
                <hr />
                <div className="profile-details">
                    <div className={classes.handle}></div>
                    <hr />
                    <div className={classes.fullLine}></div>
                    <div className={classes.fullLine}></div>
                    <hr />
                    <LocationOn color="primary" /> <span>location</span>
                    <hr />
                    <LinkIcon color="primary" /> <span> https://website.com</span>
                    <hr />
                    <CalendarToday color="primary" /> <span> Joined date</span>
                </div>
            </div>
        </Paper>
    )
}

export default ProfileSkeleton
