import React from "react";
import { connect } from "react-redux";

import { User } from '../components/User.jsx';
import { Main } from '../components/Main.jsx';
import { setName } from '../actions/userAction.jsx';

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

// here we provide the store's state to mapStateToProps, a pure function
const mapStateToProps = (state) => {
    return {
        user: state.user,
        math: state.math,
    };
};

// here we provide the store's dispatch to mapDispatchToProps, a pure function
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
          dispatch(setName(name)) ;
        }
    };
};

// this runs another function which expects to get the function
// you want to hook up: "App"
export default connect(mapStateToProps, mapDispatchToProps)(App);