import * as actionTypes from './actionTypes';

export const initUsers = (users) => {
  return {
    type: actionTypes.ADD_USERS,
    payload: users
  }
}

export const deleteUser = (id) => {
  // console.log(id)
  return {
    type: actionTypes.DLT_USER,
    payload: id
  }
}

export const showPhrase = (id) => {
  // console.log(id)

  return {
    type: actionTypes.SHOW_PHRASE,
    payload: id
  }
}