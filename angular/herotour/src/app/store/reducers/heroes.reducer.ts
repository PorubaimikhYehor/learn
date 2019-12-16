import { HeroesList } from '../models/heroeslist.interface';
import { heroesActionTypes } from '../constants/heroes.constants';
import { heroesActionUnion } from '../action/heroes.actions';
import { Hero } from 'src/app/hero';

const initialState: HeroesList = {
  list: [],
};

export function HeroesReducer(state: HeroesList = initialState, action: heroesActionUnion) {
  console.log(state);
  switch (action.type) {
    case heroesActionTypes.UPDATE:
      console.log('---update---', action.payload);
      const heroId: number = state.list.findIndex(item => item.id === action.payload.id);
      const newHeroList: Hero[] = [...state.list];
      newHeroList[heroId] = action.payload;
      return {
        ...state,
        list: newHeroList,
      }
    // case heroesActionTypes.LOAD:
    //   console.log('---load---');
    //   return {
    //     list: action.payload
    //   };
    case heroesActionTypes.LOAD_SUCCESS:
      // console.log('---load---');
      return {
        list: action.payload
      };
    case heroesActionTypes.LOAD_FAILED:
      // console.log('---load---');
      return {
        ...state
        // list: action.payload
      };
    // case heroesActionTypes.ADD:
    //   console.log('---add---');
    //   return {
    //     ...state,
    //     list: action.payload
    //   };
      case heroesActionTypes.ADD_SUCCESS:
      console.log('---add SUCCESS---');
      const list = [...state.list];
      list.push(action.payload);
      return {
        ...state,
        list,
      };    case heroesActionTypes.ADD_FAILED:
      console.log('---add---');
      return {
        ...state,
      };


    case heroesActionTypes.DELETE:
      console.log('---delete---');
      // console.log(action.payload);
      return {
        ...state,
        list: action.payload
      };

    default:
      console.log('---default----');
      return state;
  }
  console.log(state);
}
