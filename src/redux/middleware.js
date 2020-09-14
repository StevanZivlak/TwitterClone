// import jwtDecode from "jwt-decode"
// import axios from "axios"

// import { SET_AUTHENTICATED } from "./types"
// import { logoutUser, getUserData } from "./actions/userActions"

// function checkTokenExpirationMiddleware({ getState, dispatch }) {
//     return (next) => (action) => {
//         const token = localStorage.FBIdToken
//         if (token) {
//             const decodedToken = jwtDecode(token)
//             console.log("decodedToken IS :  ")
//             console.log(decodedToken)
//             if (decodedToken.exp * 1000 < Date.now()) {
//                 next(action)
//                 localStorage.removeItem("FBIdToken")
//                 delete axios.defaults.headers.common["Authorization"]
//                 dispatch({ type: SET_AUTHENTICATED })
//             } else {
//                 dispatch({ type: SET_AUTHENTICATED })
//                 dispatch(getUserData())
//                 axios.defaults.headers.common["Authorization"] = token
//                 next(action)
//             }
//         } else {
//             next(action)
//         }
//     }
// }

// export default checkTokenExpirationMiddleware
