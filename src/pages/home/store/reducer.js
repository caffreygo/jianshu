import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
    {
      id: 3,
      title: "人间喜剧",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
    {
      id: 4,
      title: "卢梭",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
  ],
  articleList: [
    {
      id: 1,
      title: "胡歌12年后首谈车祸，既然活了下来，就不能白白活着",
      desc:
        "爱啥啥啊阿迪王，俺带，阿瓦达，阿萨大，俺带，啊伟大伟大上课讲话大声看后决定卡刷点卡卡卡是的卡拉圣诞节哦啊是。啊是进口大数据都i阿三倒计时的，山东i哈啥搜狐大宋i话就打死好的",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
    {
      id: 2,
      title: "胡歌12年后首谈车祸，既然活了下来，就不能白白活着",
      desc:
        "爱啥啥啊阿迪王，俺带，阿瓦达，阿萨大，俺带，啊伟大伟大上课讲话大声看后决定卡刷点卡卡卡是的卡拉圣诞节哦啊是。啊是进口大数据都i阿三倒计时的，山东i哈啥搜狐大宋i话就打死好的",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
    {
      id: 3,
      title: "胡歌12年后首谈车祸，既然活了下来，就不能白白活着",
      desc:
        "爱啥啥啊阿迪王，俺带，阿瓦达，阿萨大，俺带，啊伟大伟大上课讲话大声看后决定卡刷点卡卡卡是的卡拉圣诞节哦啊是。啊是进口大数据都i阿三倒计时的，山东i哈啥搜狐大宋i话就打死好的",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
    {
      id: 4,
      title: "胡歌12年后首谈车祸，既然活了下来，就不能白白活着",
      desc:
        "爱啥啥啊阿迪王，俺带，阿瓦达，阿萨大，俺带，啊伟大伟大上课讲话大声看后决定卡刷点卡卡卡是的卡拉圣诞节哦啊是。啊是进口大数据都i阿三倒计时的，山东i哈啥搜狐大宋i话就打死好的",
      imgUrl:
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg",
    },
  ],
  recommendList: [
    {
      id: 1,
      imgUrl: require("../../../statics/1.png"),
    },
    {
      id: 2,
      imgUrl: require("../../../statics/2.png"),
    },
    {
      id: 3,
      imgUrl: require("../../../statics/3.png"),
    },
    {
      id: 4,
      imgUrl: require("../../../statics/4.png"),
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
