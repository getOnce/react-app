import * as React from 'react';
import Demo, {InterProps} from './Demo';


export default class extends React.Component<{}, InterProps>{
    constructor(props = {price: 100, 
        name: 'demo usage', 
        onIncrement: () => {}, onDecrement: () => {}}) {
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
            onIncrement: props.onIncrement,
            onDecrement: props.onDecrement
        };
        
    }

    render() {
        const {
            price, 
            name,
            onIncrement, 
            onDecrement
        } = this.state;
      return (
        <Demo
          price={price}
          name={name}
          onIncrement={() => {
            this.setState({
                price: price + 10
            })
            onIncrement && onIncrement();
          }}
          onDecrement={() => {
            this.setState({
                price: price - 10
            })
            onDecrement && onDecrement();
          }}
        />
      );
    }
}

