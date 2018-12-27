import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption: string) => {
  return {
    type: ActionTypes.INCREMENT,
    counterCaption: counterCaption
  };
};

export const decrement = (counterCaption: string) => {
  return {
    type: ActionTypes.DECREMENT,
    counterCaption: counterCaption
  };
};
