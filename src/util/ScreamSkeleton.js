import React from "react"
import { Card, CardMedia, CardContent, makeStyles } from "@material-ui/core"

import emptyProfileImage from "../images/emptyProfileImage.png"

const DEF_NUMBER_OF_SCREAMS = 5

const useStyles = makeStyles((theme) => ({
    ...theme.screamSkeleton
}))

function ScreamSkeleton() {
    const classes = useStyles()

    const content = Array.from(Array(DEF_NUMBER_OF_SCREAMS)).map((_item, index) => (
        <Card key={index} className={classes.card}>
            <CardMedia className={classes.cardMedia} image={emptyProfileImage} />
            <CardContent className={classes.cardContent}>
                <div className={classes.handle} />
                <div className={classes.date} />
                <div className={classes.fullLine} />
                <div className={classes.fullLine} />
                <div className={classes.halfLine} />
            </CardContent>
        </Card>
    ))

    return content
}

export default ScreamSkeleton
