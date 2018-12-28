import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store';
import Demo from './store/demo/index';
import DemoUsage from './components/Demo.usage';
ReactDOM.render(
    <Provider store={store}>
      <Demo />
      <DemoUsage  />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );