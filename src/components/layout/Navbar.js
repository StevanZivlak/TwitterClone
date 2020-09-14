import React from "react"
import { Link } from "react-router-dom"

import { useSelector } from "react-redux"

import MyButton from "../../util/MyButton"
import PostScream from "../scream/PostScream"
import Notifications from "./Notifications"

// MUI stuff
import { AppBar, Toolbar, Button } from "@material-ui/core"
import { Home as HomeIcon } from "@material-ui/icons"

function Navbar() {
    const authenticated = useSelector((state) => state.user.authenticated)

    return (
        <AppBar>
            <Toolbar className="nav-container">
                {authenticated ? (
                    <>
                        <PostScream />
                        <Link to="/">
                            <MyButton tooltip="Home">
                                <HomeIcon />
                            </MyButton>
                        </Link>
                        <Notifications />
                    </>
                ) : (
                    <>
                        <Button color="inherit" component={Link} to="/">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                        <Button color="inherit" component={Link} to="/signup">
                            Signup
                        </Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
