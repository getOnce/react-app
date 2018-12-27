import * as ActionTypes from './ActionTypes.js';
export interface Action {
  type: string;
  counterCaption: string;
}
export default (state: any, action: Action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
