import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { likeScream, unlikeScream } from "../../redux/actions/dataActions"

import MyButton from "../../util/MyButton"
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from "@material-ui/icons"
import { Link } from "react-router-dom"

function ScreamLikeButton({ screamId }) {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const likedScream = () => {
        if (user.likes && user.likes.find((like) => like.screamId === screamId)) {
            return true
        } else {
            return false
        }
    }

    if (!user.authenticated) {
        return (
            <MyButton tooltip="like">
                <Link to="/login">
                    <FavoriteBorderIcon color="primary" />
                </Link>
            </MyButton>
        )
    }
    if (likedScream()) {
        return (
            <MyButton tooltip="unlike" onClick={(e) => dispatch(unlikeScream(screamId))}>
                <FavoriteIcon color="primary" />
            </MyButton>
        )
    } else {
        return (
            <MyButton tooltip="like" onClick={(e) => dispatch(likeScream(screamId))}>
                <FavoriteBorderIcon color="primary" />
            </MyButton>
        )
    }
}

export default ScreamLikeButton
