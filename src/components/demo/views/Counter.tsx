import * as React from 'react';
import * as Actions from '../Actions.js';
import * as redux  from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

export interface CounterProps {
  caption: string;
  onIncrement: () => void;
  onDecrement: () => void;
  value: string | number;
}

function Counter(counterProps: CounterProps) {
  const {
    onIncrement,
    onDecrement,
    caption,
    value
  } = counterProps;
  return (
    <div>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}



function mapStateToProps(state: any, ownProps: CounterProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch: any, ownProps: CounterProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

export default redux.connect(mapStateToProps, mapDispatchToProps)(Counter);

