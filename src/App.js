import React, { Fragment } from "react";
import Header from "./common/header";
import store from "./store";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { GlobalStyle } from "./style.js";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login";
import Write from "./pages/write";
import { IconFont } from "./statics/iconfont/iconfont.js";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/write" component={Write}></Route>
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
