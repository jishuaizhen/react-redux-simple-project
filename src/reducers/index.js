import {combineReducers} from 'redux'
import postReducer from './postReducer'
// 4.reducer会得到状态(state),然后进入组件
export default combineReducers({
    posts:postReducer
})