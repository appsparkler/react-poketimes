import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        // alert(JSON.stringify())
        const randomNumber = Math.floor(Math.random() * 80);
        // alert(res.data.length);
        this.setState({
          posts: res.data.splice(randomNumber, 10)
        })
      });
  }
  render() {
    const { posts } = this.state;
    const noPostsJSX = (
      <div>No Posts Yet...</div>
    )
    const map_postsList = post => (
      <div className="post card" key={post.id}>
        <div className='card-content'>
          <h1 className='card-title blue-text'>{post.title}</h1>
          <p>
            { post.body.substr(0, 80) }...
            </p>
        </div>
      </div>
    )
    const postsList = posts && posts.length ?
      posts.map(map_postsList) : noPostsJSX
    return (
      <div className="container">
        <h4 className="center red-text">Home</h4>
        { postsList }
      </div>
    )
  }
}

export default Home;
