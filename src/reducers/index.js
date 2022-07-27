import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

// rootReducer allows us to combine all the reducers into 1
const rootReducer = combineReducers({
  // managing/updating users reducer
  user: userReducer,
});

export default rootReducer;
