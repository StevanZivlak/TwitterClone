import {
    SET_USER,
    SET_ERRORS,
    CLEAR_ERRORS,
    LOADING_UI,
    SET_UNAUTHENTICATED,
    LOADING_USER,
    MARK_NOTIFICATIONS_READ
} from "../types"
import axios from "axios"

export function loginUser(userData, history) {
    return (dispatch) => {
        dispatch({ type: LOADING_UI })
        axios
            .post("/login", userData)
            .then((response) => {
                setAuthorizationHeader(response.data.token)
                dispatch(getUserData()) //sets user data
                dispatch({ type: CLEAR_ERRORS })
                history.push("/")
            })
            .catch((err) => {
                dispatch({ type: SET_ERRORS, payload: err.response.data })
            })
    }
}

export function signupUser(newUserData, history) {
    return (dispatch) => {
        dispatch({ type: LOADING_UI })
        axios
            .post("/signup", newUserData)
            .then((response) => {
                setAuthorizationHeader(response.data.token)
                dispatch(getUserData()) //sets user data in redux
                dispatch({ type: CLEAR_ERRORS })
                history.push("/")
            })
            .catch((error) => {
                dispatch({ type: SET_ERRORS, payload: error.response.data })
            })
    }
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem("FBIdToken")
        delete axios.defaults.headers.common["Authorization"]
        dispatch({ type: SET_UNAUTHENTICATED })
    }
}
/** Gets the data of the currently logged in user */
export function getUserData() {
    return (dispatch) => {
        dispatch({ type: LOADING_USER })
        axios
            .get("/user")
            .then((res) => {
                dispatch({
                    type: SET_USER,
                    payload: res.data
                })
            })
            .catch((err) => console.log(err))
    }
}

export function uploadImage(formData) {
    return (dispatch) => {
        dispatch({ type: LOADING_USER })
        axios
            .post("user/image", formData)
            .then((_res) => {
                dispatch(getUserData())
            })
            .catch((err) => {
                console.log("Upload image error: ")
                console.log(err)
            })
    }
}

export function editUserDetails(userDetails) {
    return (dispatch) => {
        dispatch({ type: LOADING_USER })
        axios
            .post("/user", userDetails)
            .then((_res) => {
                dispatch(getUserData())
            })
            .catch((err) => {
                console.log("Edit user details error: ")
                console.log(err)
            })
    }
}

export function markNotificationsRead(notificationIds) {
    return (dispatch) => {
        axios
            .post("/notifications", notificationIds)
            .then((res) => {
                dispatch({ type: MARK_NOTIFICATIONS_READ })
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

function setAuthorizationHeader(token) {
    const FBIdToken = `Bearer ${token}`
    localStorage.setItem("FBIdToken", FBIdToken)
    axios.defaults.headers.common["Authorization"] = FBIdToken
}
