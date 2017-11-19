import React from 'react';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/app';
require('./assets/mahfayce.png');
require('./assets/resume.pdf');
require('./scss/main.scss');

import websiteApp from './reducers'
let store = createStore(websiteApp, require('./data'))

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>
    ,
    document.getElementById('mountpoint'),
  )
};

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) });
  // module.hot.accept('./scss/main.scss', () => {
  //   require('./scss/main.scss');
  // });
}

