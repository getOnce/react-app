import * as ActionTypes from './views/ActionTypes';
export interface IAction {
  type: string;
  value: number;
}
export default function(state: any, action: IAction) {
  const {value, type} = action;

  switch (type) {
    case ActionTypes.INCREMENT:
    
      return Object.assign({}, state, { value: value + 1 })

    case ActionTypes.DECREMENT:
      return Object.assign({}, state, { value: value - 1 })
    default:
      return state
  }
}
