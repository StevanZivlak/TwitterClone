import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Redux
import { Provider } from "react-redux"
import store from "./redux/store"

//MUI
import { createMuiTheme, ThemeProvider as MUiThemeProvider } from "@material-ui/core/styles"
import themeObject from "./util/theme"

import App from "./App"

const theme = createMuiTheme(themeObject)

ReactDOM.render(
    <MUiThemeProvider theme={theme}>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </MUiThemeProvider>,
    document.getElementById("root")
)
