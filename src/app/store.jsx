import {createStore , combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

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
    //parentheses after promise mean that it is package that must
    //be executed 
    applyMiddleware(createLogger(), thunk, promise())
);