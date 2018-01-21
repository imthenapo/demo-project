import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Grommet } from 'grommet';
import createStore from '../store/createStore';
import getRoutes from '../routes';
import { Theme } from '../style';
// ========================================================
// Store, History, Routes Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const history = createBrowserHistory();
const store = createStore(initialState, history);
const routes = getRoutes();

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <ConnectedRouter history={ history }>
          <Grommet theme={ Theme }>{routes}</Grommet>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
