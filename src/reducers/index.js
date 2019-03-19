import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import map from "./map";

export default combineReducers({
  form,
  map
});
