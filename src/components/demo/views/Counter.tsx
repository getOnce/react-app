import * as React from 'react';

const buttonStyle = {
  margin: '10px'
};
export interface ICounterProps {
  caption?: string;
  onDecrement: any;
  onIncrement: any;
  value?: string | number;
}

export const Counter: React.SFC<ICounterProps> = (props) => {
  const {
    caption,
    onDecrement,
    onIncrement,
    value
  } = props;
  const handleIncrement = () => { onIncrement(value) }
  const handleDecrement = () => { onDecrement(value) }
  return (
    <div>
      <button style={buttonStyle} onClick={handleIncrement}>+</button>
      <button style={buttonStyle} onClick={handleDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

