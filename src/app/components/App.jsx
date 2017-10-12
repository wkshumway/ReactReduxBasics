import React from "react";
import { connect } from "react-redux";

import { User } from './User';
import { Main } from './Main';

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