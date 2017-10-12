import React from "react";
import { connect } from "react-redux";

import { User } from '../components/User.jsx';
import { Main } from '../components/Main.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Anna")}/>
                <User username={this.props.user.name}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer,
    };
};

const mapDispatchtoProps= (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name,
            });
        }
    };
};

// this runs another function which expects to get the function
// you want to hook up: "App"
export default connect(mapStateToProps, mapDispatchtoProps)(App);