import * as React from 'react';
import Demo, {InterProps} from './Demo';


export default class extends React.Component <{}, object>{
    constructor(props: InterProps) {
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
            onIncrement();
          }}
          onDecrement={() => {
            this.setState({
                price: price - 10
            })
            onDecrement();
          }}
        />
      );
    }
}

