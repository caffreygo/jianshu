import React, { Fragment } from 'react';
import Header from './common/header';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style.js';
import Home from './pages/home';
import Detail from './pages/detail';
import { IconFont } from './statics/iconfont/iconfont.js';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont />
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>

  );
}

export default App;
