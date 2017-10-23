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

export default mathReducer;