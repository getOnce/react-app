import {createStore} from 'redux';
import reducer from './Reducer';
export interface InitValues {
  'First': string,
  'Second': string,
  'Third': string
}
const initValues = {
  'First': 0,
  'Second': 10,
  'Third': 20
};

const store = createStore(reducer, initValues);

export default store;
