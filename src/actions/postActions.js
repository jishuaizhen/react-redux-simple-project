import {FETCH_POSTS,NEW_POSTS} from './types'
// 分发操作
// export function fetchPosts(){
//     return function(dispatch){
//         fetch('http://jsonplaceholder.typicode.com/posts')
//         .then(res=>res.json())
//         .then(posts=>
//             dispatch({
//                 type:FETCH_POSTS,
//                 payload:posts
//             })
//             )
//     }
// }
// es6语法
export const fetchPosts = () => dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(posts=>
    // 2.当操作成功时，通过dispatch将数据提交到store中 postReducer.js
        dispatch({
            type:FETCH_POSTS,
            payload:posts
        })
    )
}
export const createPost = postData => dispatch => {
    fetch('http://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        header:{
          "content-type":"application/json"
        },
        body:JSON.stringify(postData)
      })
      .then(res=>res.json())
      .then(post=>
        // 2.当操作成功时，通过dispatch将数据提交到store中 postReducer.js
        dispatch({
            type:NEW_POSTS,
            payload:post
        })
        )
}