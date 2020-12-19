const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");

import Routes from "./components/Routes";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
