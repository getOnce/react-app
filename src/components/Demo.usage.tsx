import * as React from 'react';
import Demo, {InterProps} from './Demo';


export default class extends React.Component<InterProps, InterProps>{
    constructor(props: InterProps) {
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
            onIncrement: props.onIncrement,
            onDecrement: props.onDecrement
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    public increment() {
        this.setState({
            price: this.state.price + 1
        });
        if(this.state.onIncrement) {
            this.state.onIncrement();
        }    
        
    }
    public decrement() {
        this.setState({
            price: this.state.price - 1
        });
        if(this.state.onDecrement){
            this.state.onDecrement();
        }
    }
    public render() {
        const {
            price, 
            name,
            // onIncrement, 
            // onDecrement
        } = this.state;
      return (
        <Demo
          price={price}
          name={name}
          onIncrement={this.increment}
          onDecrement={this.decrement}
        />
      );
    }
}

