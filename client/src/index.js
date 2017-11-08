import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import todoApp from './reducers';
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/app';

require('./scss/main.scss');
require('./assets/mahfayce.png');
require('./assets/resume.pdf');

// let store = createStore(todoApp)

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('mountpoint'),
  )
};

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App) })
}
