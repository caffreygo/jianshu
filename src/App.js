import React, { Fragment } from 'react';
import Header from './common/header'
import { GlobalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont.js'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont />
      <Header />
    </Fragment>

  );
}

export default App;
