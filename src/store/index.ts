import { createStore } from 'redux';
import demoReducer from './demo/reducer';

export const store = createStore(demoReducer, {
  price: 100,
  name: 'Hello World!',
});