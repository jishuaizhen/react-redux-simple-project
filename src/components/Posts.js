import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
class Posts extends Component {
    componentDidMount(){
      // 1.触发action操作postActions.js
      this.props.fetchPosts()
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost)
      }
    }
  render() {
    const postItems = this.props.posts.map(post=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ))
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}
// Posts.proptypes = {
//   fetchPosts:PropTypes.func.isRequired,
//   posts:PropTypes.array.isRequired
// }
// 5.进入组件后，拿到reducer身上的状态(state)，通过mapStateToProps方法将state转化为props，
// 组件中可以从原来的this.state改为this.props获取数据
const mapStateToProps = state => ({
  posts:state.posts.items,
  newPost:state.posts.item
})
export default connect(mapStateToProps,{fetchPosts})(Posts);