import { combineReducers } from "redux";

import authReducer from "./authReducer";
import toolsReducer from "./toolsReducer";
import featuresReducer from "./featuresReducer";
import bugsReducer from "./bugsReducer";

export default combineReducers({
  auth: authReducer,
  tools: toolsReducer,
  features: featuresReducer,
  bugs: bugsReducer,
});
