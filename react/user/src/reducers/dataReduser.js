import * as actionType from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionType.SHOW_PHRASE:
      // const res = state.users.map((item, id) => {
      // console.log(action);
      //   item.isShowPrase = (id === action.payload) ? true: false;
      //   return item;
      // })
      const ddd = [
        ...state.users
      ];

      ddd[action.payload].isShowPhrase = ddd[action.payload].isShowPhrase ? false:true;

      // console.log('state', ddd);
      return {
        ...state,
        users: ddd
      }
    case actionType.DLT_USER:
      // console.log('state' , state);
      const result = state['users'].filter((users, id) => { return id !== action.payload })
      // console.log(result);
      return {
        ...state,
        users: result
      };
    case actionType.ADD_USERS:
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state;
  }
}