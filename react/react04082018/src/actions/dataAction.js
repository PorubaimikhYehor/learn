import * as actionTypes from './ActionTypes';

export const pushData = (data) => {
  return {
    type: actionTypes.PUSH_LIST,
    data: data,
  }
}