import * as types from "./../constants/ActionTypes";

var initialState = {
  id: "",
  name: "",
  status: false
}; // close
var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_ITEM:
      return action.task;
    default:
      return state;
  }
};

export default myReducer;
