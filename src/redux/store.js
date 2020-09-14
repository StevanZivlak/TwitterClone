import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import userReducer from "./reducers/userReducer"
import dataReducer from "./reducers/dataReducer"
import uiReducer from "./reducers/uiReducer"

const initialState = {}

const middleware = [thunk]

const rootReducer = combineReducers({
    data: dataReducer,
    UI: uiReducer,
    user: userReducer
})

//makes it use regular compose when browser doesn't have react-dev-tools extention
const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose

const enhancer = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(rootReducer, initialState, enhancer)

export default store
