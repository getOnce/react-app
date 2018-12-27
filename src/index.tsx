import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as redux from 'react-redux';
import CounterConnect from './components/demo/views/Counter-Connect';


import store from './components/demo/Store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
const {Provider} = redux;
ReactDOM.render(
  <Provider store={store}>
  <CounterConnect caption={'First'}/>
</Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();









