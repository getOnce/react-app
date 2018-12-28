import Demo from '../../components/Demo';
import * as actions from './actions';
import { DemoState } from './types';
import { connect } from 'react-redux';
import {Dispatch} from 'redux';

export function mapStateToProps({ name, price}: DemoState) {
    return {
      name,
      price
    }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.PriceAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementPrice()),
        onDecrement: () => dispatch(actions.decrementPrice()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Demo);
