import * as actionTypes from '../actions/ActionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.PUSH_LIST:
    return action.data;
    default: return state;
  }
}