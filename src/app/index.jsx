/* currently at 18:43 in Redux #7 */
import {render} from "react-dom";
import React from "react";
import {Provider} from "react-redux";

import App from "./containers/App.jsx";
import store from "./store.jsx";

render(
    //Provider provides the store to its child components: in this case App
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);