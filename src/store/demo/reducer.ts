import {PriceAction} from './actions';
import {DemoState} from './types';
import {DECREMENT_PRICE, INCREMENT_PRICE} from './constants';
export default function (state: DemoState, action: PriceAction): DemoState {
    const {type} = action;
    switch(type) {
        case INCREMENT_PRICE: 
            return {...state, price: state.price + 10};
        case DECREMENT_PRICE:
            const priceLocal = state.price - 10;
            return {...state, price: priceLocal >= 0 ? priceLocal : state.price}    
    }
    return {...state}
}
