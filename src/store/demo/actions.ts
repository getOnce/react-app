import * as constants from './constants'

/**
 * @interface action的接口类型
 */
export interface DecrementPrice{
    type: constants.DECREMENT_PRICE
}
export interface IncrementPrice{
    type: constants.INCREMENT_PRICE
}

export type PriceAction = DecrementPrice | IncrementPrice;

/**
 * action 生成器
 */
export function incrementPrice(): IncrementPrice {
    return {
        type: constants.INCREMENT_PRICE
    }
}
export function decrementPrice(): DecrementPrice {
    return {
        type: constants.DECREMENT_PRICE
    }
}