import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store';
import Demo from './store/demo/index';

ReactDOM.render(
    <Provider store={store}>
      <Demo />
    </Provider>,
    document.getElementById('root') as HTMLElement
  );