import { createStore } from 'redux';
import rootReducers from '../reducers/';

export default (initialData) => {
  return createStore(rootReducers, initialData)
}