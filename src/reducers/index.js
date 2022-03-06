import { combineReducers } from "redux";

const counterReducer = (count = 0, action) => {
  if (action.type === "increment") {
    return count + 1;
  } else if (action.type === "decrement") {
    return count - 1;
  } else {
    return count;
  }
};

export default combineReducers({
  count: counterReducer,
  //optional more reducrs
});
