import {FETCH_POSTS,NEW_POSTS} from '../actions/types'
// reducer的作用:返回新的状态
const initialState = {
    items:[],
    item:{}
}
// 3.store会拿到之前的状态和action给reducer，reducer会进行判断，看执行的是哪一个action.type,然后返回相应的数据 
// 然后进入跟reducer中 也就是reducers/index.js
export default function(state=initialState,action){
    switch(action.type){
        case NEW_POSTS:
            return {
                ...state,
                item:action.payload
            }
        case FETCH_POSTS:
            return {
                ...state,
                items:action.payload
            }
        default:
            return state;
    }
}