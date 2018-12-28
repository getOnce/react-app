import * as React from 'react';
import './Demo.css';
export interface InterProps {
    name: string;
    price: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Demo({
    name,
    price,
    onIncrement,
    onDecrement
}: InterProps){

return (<div>
        <span>{`name: ` + name + ` price: ` + price}</span><br/>
        <input onClick={onIncrement} value="加价" type="button"/><br/>
        <input onClick={onDecrement} value="减价" type="button"/>
    </div>)
}
export default Demo