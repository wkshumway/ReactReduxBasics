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

export default userReducer;