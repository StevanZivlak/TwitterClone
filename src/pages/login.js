import React, { useState } from "react"
import AppIcon from "../images/icon.png"
import { useHistory, Link } from "react-router-dom"

import {
    Grid,
    Typography,
    TextField,
    Button,
    CircularProgress,
    makeStyles
} from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { loginUser } from "../redux/actions/userActions"

const useStyles = makeStyles((theme) => ({ ...theme.nonPalette }))

function Login(props) {
    const UI = useSelector((state) => state.UI)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const isLoading = UI.isLoading
    const errors = UI.errors

    const dispatch = useDispatch()

    const history = useHistory()
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email: email,
            password: password
        }
        dispatch(loginUser(userData, history))
    }

    return (
        <div>
            <Grid container className={classes.form}>
                <Grid item sm />
                <Grid item sm>
                    <img src={AppIcon} alt="monkey" className={classes.image} />
                    <Typography variant="h2" className={classes.pageTitle}>
                        Login
                    </Typography>
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            id="email"
                            name="email"
                            type="email"
                            label="email"
                            className={classes.textField}
                            helperText={errors.email}
                            error={errors.email ? true : false}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="password"
                            className={classes.textField}
                            helperText={errors.password}
                            error={errors.password ? true : false}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                        />
                        {errors.general && (
                            <Typography variant="body2" className={classes.customError}>
                                {errors.general}
                            </Typography>
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            disabled={isLoading}
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
                            Don't have an account? Sign up <Link to="/signup">here</Link>.
                        </small>
                    </form>
                </Grid>
                <Grid item sm />
            </Grid>
        </div>
    )
}

export default Login
