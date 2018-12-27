import * as ActionTypes from './ActionTypes';
export const increment = (valueNumber: number) => {
  return {
    type: ActionTypes.INCREMENT,
    value: valueNumber
  };
};

export const decrement = (valueNumber: number) => {
  return {
    type: ActionTypes.DECREMENT,
    value: valueNumber
  };
};
