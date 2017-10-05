// import React from "react";
// import {render} from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Max"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return (
//             <div className="container">
//                 <Main changeUsername={this.changeUsername.bind(this)}/>
//                 <User username={this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

/* currently at 9:58 in Redux #4 */
import { createStore } from "redux";

const initialState = {
    result: 1,
    lastValues: [],
};

// reducer directs all dispatches and changes the state accordingly
const reducer = (state = initialState, action) => {
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

// store takes a reducer and an optional initial state
const store = createStore(reducer);

store.subscribe(() => {
    /* It looks like state is stored in store */
    console.log("Store updated!", store.getState());
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