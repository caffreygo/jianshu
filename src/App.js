import React, { Fragment } from 'react';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont />
      <Provider store={store}>
        <Header />
      </Provider>
    </Fragment>

  );
}

export default App;
