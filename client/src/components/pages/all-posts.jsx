import React, { Component } from 'react';
import { render } from 'react-dom';
import * as PostService from '../../services/posts';
import Card from '../tools/card';
import * as UserService from '../../services/user';

export default class ViewAll extends Component {

  constructor() {
    super();

    this.state = {
      postCollection: [],
    }
  }

  componentDidMount() {
    UserService.me().then((user) => {
      console.log(user);
      return PostService.all().then((posts) => {
        posts.forEach((post) => {
          //console.log(post);
          this.setState({
            postCollection: [...this.state.postCollection, post]
          })
        })
      }).catch((err) => {
        console.error(err);
      })
    })
  }

  allPosts() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>All Posts</h1>
        <br/>
        <br/>
        <div>
          {this.state.postCollection.map((posts) => {
            let { id, userid, content, email, title } = posts;
            return (
              <Card
                key={id}
                userid={userid}
                content={content}
                email={email}
                title={title}
              />
            )
          })}
        </div>
      </div>
    )
  }

  render() {
    return (
      this.allPosts()
    )
  }
};