import React, { Component } from 'react';
import { render } from 'react-dom';
import * as PostService from '../../services/posts';
import Card from '../tools/all-posts/posts-card';
import * as UserService from '../../services/user';
import ContactInfo from '../tools/contactInfo';

export default class AllPostsPage extends Component {

  constructor() {
    super();

    this.state = {
      postCollection: [],
    }
  }

  componentDidMount() {
    UserService.me().then((user) => {
      //console.log(user);
      return PostService.all().then((posts) => {
        this.setState({
          postCollection: [...posts]
        })
      }).catch((err) => {
        console.error(err);
      });
    }).catch((err) => {
      console.error(err);
    });
  }

  allPostsContent() {
    return (
      <div className="all-posts-container">
        <h1 style={{
          textAlign: 'center'
        }}>All Posts</h1>
        <br />
        <br />
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
      <div className="posts-page-container">
        {this.allPostsContent()}
        <ContactInfo />
      </div>
    )
  }
};