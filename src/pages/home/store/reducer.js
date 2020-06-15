import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "社会热点",
        imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg"
    },
    {
        id: 2,
        title: "手绘",
        imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1494795160,4174856459&fm=26&gp=0.jpg"
    }]
})

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}