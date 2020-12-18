const React = require("react");
const ReactDOM = require("react-dom");
const { Provider } = require("react-redux");
import Main from "./components/Main";

import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("app")
);
