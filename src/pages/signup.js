import React, { useState } from "react"
import {
    makeStyles,
    Grid,
    TextField,
    Button,
    Typography,
    CircularProgress
} from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { signupUser } from "../redux/actions/userActions"

import AppIcon from "../images/icon.png"
import { useHistory, Link } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    ...theme.nonPalette
}))

function Signup() {
    const UI = useSelector((state) => state.UI)

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")
    const isLoading = UI.isLoading
    const errors = UI.errors

    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        const newUserData = {
            email: email,
            password: password,
            confirmPassword: confirmedPassword,
            handle: username
        }
        dispatch(signupUser(newUserData, history))
    }

    return (
        <div>
            <Grid container className={classes.form}>
                <Grid item sm></Grid>
                <Grid item sm>
                    <img src={AppIcon} alt="monkey" className={classes.image} />
                    <Typography variant="h2">Sign up</Typography>
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="username"
                            className={classes.textField}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            helperText={errors.handle}
                            error={errors.handle ? true : false}
                        />
                        <TextField
                            fullWidth
                            label="email"
                            type="email"
                            className={classes.textField}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                        />
                        <TextField
                            fullWidth
                            label="password"
                            type="password"
                            id="password"
                            name="password"
                            className={classes.textField}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                        />
                        <TextField
                            fullWidth
                            label="confirm password"
                            type="password"
                            id="confirmPassword"
                            className={classes.textField}
                            value={confirmedPassword}
                            onChange={(e) => setConfirmedPassword(e.target.value)}
                            helperText={errors.confirmPassword}
                            error={errors.confirmPassword ? true : false}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Submit
                            {isLoading && (
                                <CircularProgress
                                    size={20}
                                    color="primary"
                                    className={classes.progress}
                                />
                            )}
                        </Button>
                        <br />
                        <small>
                            Already have an account? Log in <Link to="/login">here</Link>.
                        </small>
                    </form>
                </Grid>
                <Grid item sm></Grid>
            </Grid>
        </div>
    )
}

export default Signup
