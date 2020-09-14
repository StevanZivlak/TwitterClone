import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import jwtDecode from "jwt-decode"
import axios from "axios"

import "./App.css"

// Redux
import { SET_AUTHENTICATED } from "./redux/types"
import { logoutUser, getUserData } from "./redux/actions/userActions"
import { useSelector } from "react-redux"
// Pages
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import User from "./pages/user"
// Components
import Navbar from "./components/layout/Navbar"
import AuthRoute from "./util/AuthRoute"

import store from "./redux/store"

axios.defaults.baseURL = "https://europe-west3-friendlyforums-3406b.cloudfunctions.net/api"

const token = localStorage.FBIdToken
if (token) {
    const decodedToken = jwtDecode(token)
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(logoutUser())
        window.location.href = "./login"
    } else {
        store.dispatch({ type: SET_AUTHENTICATED })
        axios.defaults.headers.common["Authorization"] = token
        store.dispatch(getUserData())
    }
}

function App() {
    const authenticated = useSelector((state) => state.user.authenticated)
    return (
        <div>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login">
                        {authenticated ? <Redirect to="/" /> : <Login />}
                    </Route>
                    {/*  ^ probably way better than the below AuthRoute way/*/}
                    <AuthRoute
                        exact
                        path="/signup"
                        component={Signup}
                        authenticated={authenticated}
                    />
                    <Route exact path="/user/:handle" component={User} />
                    <Route exact path="/user/:handle/scream/:screamId" component={User} />
                </Switch>
            </div>
        </div>
    )
}

export default App
