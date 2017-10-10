/* currently at 6:58 in Redux #6 */
import { createStore , combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

// const initialState = {
//     result: 1,
//     lastValues: [],
/// reducer directs all dispatches and changes the state accordingly
const userReducer = (state = {
    name: "Wellesley",
    age: 21,
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload,
            };
            break;
    }
    return state;
} ;


// reducer directs all dispatches and changes the state accordingly
const mathReducer = (state = {
    result: 1,
    lastValues: [],
}, action) => {
    /* above the '=' creates an optional default parameter. */
    /* the first time dispatches are called, they will use */
    /* that parameter. Afterwards they will use the new state */
    switch (action.type) {
        case "ADD":
            // do not do it this way, directly manipulating the property
            // state.result += action.payload;
            // instead, create new object and copy the old one over
            state = {
                /* this copies all the properties from the state object */
                ...state,
                result: state.result + action.payload, 
                /* below is how to push to an array in an immutable way */
                lastValues: [...state.lastValues, action.payload],
            };
            break;
        case "SUBTRACT":
            state = {
                /* this copies all the properties from the state object */
                ...state,
                result: state.result - action.payload, 
                lastValues: [...state.lastValues, action.payload],
            };
            break;
    }
    return state;
} ;

// fat-arrow function chain means that you can use
// any of the arguments passed in the parentheses
const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
};

// store takes a reducer and an optional initial state
// mathReducer and userReducer are automatically expanded to key value
// pairs with the same name for each
const store = createStore(
    combineReducers({mathReducer, userReducer}),
    {},
    applyMiddleware(createLogger()));

store.subscribe(() => {
    /* It looks like state is stored in store */
    // console.log("Store updated!", store.getState());
});

store.dispatch({
    type: "ADD",
    /* always use payload here for interfacing purposes */
    payload: 100,
});

store.dispatch({
    type: "ADD",
    /* always use payload here for interfacing purposes */
    payload: 22,
});

store.dispatch({
    type: "SUBTRACT",
    /* always use payload here for interfacing purposes */
    payload: 88,
});

store.dispatch({
    type: "SET_AGE",
    /* always use payload here for interfacing purposes */
    payload: 30,
});

store.dispatch({
    type: "SET_NAME",
    /* always use payload here for interfacing purposes */
    payload: "Elle",
});