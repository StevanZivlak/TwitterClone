import {
    SET_SCREAMS,
    SET_SCREAM,
    LOADING_DATA,
    LIKE_SCREAM,
    UNLIKE_SCREAM,
    DELETE_SCREAM,
    LOADING_UI,
    STOP_LOADING_UI,
    CLEAR_ERRORS,
    POST_SCREAM,
    SET_ERRORS,
    SUBMIT_COMMENT
} from "../types"
import axios from "axios"

/** Gets all screams from DB into redux. */
export function getScreams() {
    return (dispatch) => {
        dispatch({ type: LOADING_DATA })
        axios
            .get("/screams")
            .then((res) => {
                dispatch({
                    type: SET_SCREAMS,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: SET_SCREAMS,
                    payload: []
                })
                console.log("Get screams error: ")
                console.log(err)
            })
    }
}

/** Like a scream */
export function likeScream(screamId) {
    return (dispatch) => {
        axios
            .post(`/scream/${screamId}/like`)
            .then((res) => {
                dispatch({
                    type: LIKE_SCREAM,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log("Like Scream error: ")
                console.log(err)
            })
    }
}

/** Unlike a scream */
export function unlikeScream(screamId) {
    return (dispatch) => {
        axios
            .post(`/scream/${screamId}/unlike`)
            .then((res) => {
                dispatch({
                    type: UNLIKE_SCREAM,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log("Unlike scream error: ")
                console.log(err)
            })
    }
}

/** Submit a comment */
export function submitComment(screamId, commentData) {
    return (dispatch) => {
        axios
            .post(`/scream/${screamId}/comment`, commentData)
            .then((res) => {
                dispatch(clearErrors())
                dispatch({
                    type: SUBMIT_COMMENT,
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
                console.log(err)
            })
    }
}

/** Delete a scream */
export function deleteScream(screamId) {
    return (dispatch) => {
        axios
            .delete(`/scream/${screamId}`)
            .then((_res) => {
                dispatch({
                    type: DELETE_SCREAM,
                    payload: screamId
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}
/** Post a scream */
export function postScream(newScream) {
    return (dispatch) => {
        dispatch({ type: LOADING_UI })
        axios
            .post("/scream", newScream)
            .then((res) => {
                dispatch({
                    type: POST_SCREAM,
                    payload: res.data
                })
                dispatch(clearErrors())
            })
            .catch((err) => {
                dispatch({
                    type: SET_ERRORS,
                    payload: err.response.data
                })
                console.log(err)
            })
    }
}
/** Clear UI error flags. */
export function clearErrors() {
    return (dispatch) => {
        dispatch({ type: CLEAR_ERRORS })
    }
}
/** Fetch a specific scream */
export function getScream(screamId) {
    return (dispatch) => {
        dispatch({ type: LOADING_UI })
        axios
            .get(`/scream/${screamId}`)
            .then((res) => {
                dispatch({
                    type: SET_SCREAM,
                    payload: res.data
                })
                dispatch({ type: STOP_LOADING_UI })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

/** Gets the details of the user of with the handle you send. */
export function getUserDetails(userHandle) {
    return (dispatch) => {
        dispatch({ type: LOADING_DATA })
        axios
            .get(`/user/${userHandle}`)
            .then((res) => {
                dispatch({
                    type: SET_SCREAMS,
                    payload: res.data.screams
                })
            })
            .catch((err) => {
                dispatch({
                    type: SET_SCREAMS,
                    payload: null
                })
                console.log(err)
            })
    }
}
