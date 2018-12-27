
import { connect } from 'react-redux';
import * as action from './Actions';
import { Counter } from './Counter';

export interface ICounterProps{
  caption: string;
}
const initValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
  };
const mapStateToProps = (state = initValues, ownProps: ICounterProps) => ({
    caption: ownProps.caption,
    value: state[ownProps.caption]
});

export default connect(mapStateToProps, {
    onDecrement: action.decrement,
    onIncrement: action.increment
})(Counter);


  
  