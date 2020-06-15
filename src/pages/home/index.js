import React, { Component } from 'react';
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Topic from "./components/Topic";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592200833675&di=6fc258493302450c75369d484e287e9b&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201306%2F23%2F110328s72xxse7lfis9fnd.jpg" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home