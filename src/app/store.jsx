import {createStore , combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

import math from "./reducers/mathReducer.jsx";
import user from "./reducers/userReducer.jsx";

// store takes a reducer and an optional initial state
// mathReducer and userReducer are automatically expanded to key value
// pairs with the same name for each
export default createStore(
    combineReducers({
        math,
        user, 
    }),
    {},
    applyMiddleware(createLogger())
);