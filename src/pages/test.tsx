import * as React from 'react';
import { Provider } from 'react-redux';
import {store} from '../store';
import Demo from '../store/demo';
import DemoUsage from '../components/Demo.usage';

export default function() {
    return (
        <Provider store={store}>
            <h1>
                <span>TEST</span>
            </h1>
            <Demo />
            <DemoUsage  name={`hello`} price={1000}/>
        </Provider>
    )
}