import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, SearchWrapper, Addition, Button } from './style'

class Header extends Component {

  constructor(props) {
    super(props)

    this.state = {
      focused: false
    }

    this.handleInpusFocus = this.handleInpusFocus.bind(this)
    this.handleInpusBlur = this.handleInpusBlur.bind(this)
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition timeout={200} in={this.state.focused} classNames="slide">
              <NavSearch onFocus={this.handleInpusFocus} onBlur={this.handleInpusBlur} className={this.state.focused ? 'focused' : ''}></NavSearch>
            </CSSTransition>

            <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe614;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe708;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInpusFocus() {
    this.setState({
      focused: true
    })
  }

  handleInpusBlur() {
    this.setState({
      focused: false
    })
  }
}

export default Header