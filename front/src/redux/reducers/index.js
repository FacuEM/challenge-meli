import { combineReducers } from "redux";

import authReducer from "./authReducer";
import toolsReducer from "./toolsReducer";
import featuresReducer from "./featuresReducer";
import bugsReducer from "./bugsReducer";
import priorityReducer from "./priorityReducer";

export default combineReducers({
  auth: authReducer,
  tools: toolsReducer,
  features: featuresReducer,
  bugs: bugsReducer,
  priorities: priorityReducer,
});
