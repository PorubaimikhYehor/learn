import { createStore } from 'redux';
import rootReducers from '../reducers'

export default function configureStore(initialStore) {
  return createStore(rootReducers, initialStore)
}