import React from 'react';
import moment from 'moment';
import update from 'immutability-helper';

import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

const post1 = {
    id: 1,
    text: 'Text1',
    likes: 1,
    image: {
      src: "url1",
      alt: "alt1",
      style: {width: 100, height: 100}
    },
    details: {
      author: "Author1",
      createdAt: moment("20170520", "YYYYMMDD").fromNow(),
      updatedAt: moment().startOf('day').fromNow()
    }
  }

const post2 = {
    id: 2,
    text: 'Text2',
    likes: 2,
    image: {
      src: "url2",
      alt: "alt2",
      style: {width: 100, height: 100}
    },
    details: {
      author: "Author2",
      updatedAt: moment().startOf('day').fromNow()
    }
  }

const post3 = {
    id: 3,
    text: 'Text3',
    likes: 3,
    image: {
      src: "url3",
      alt: "alt3",
      style: {width: 100, height: 100}
    },
    details: {
      author: "Author3",
      createdAt: moment("20170601", "YYYYMMDD").fromNow()
    }
  }

const posts = [ post1, post2, post3];

export default class BlogPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {posts};
    this.like = this.like.bind(this);
  }

  render() {
    const {posts} = this.state;
    return(
      <div>
        <BlogList posts={ this.state.posts } like={this.like} />
        <PieChart columns={[ ...posts.map( post => [post.text,post.likes]) ]} />
      </div>
    )
  };

  like(post_id) {
    const idx = this.state.posts.findIndex((elem) => elem.id === post_id )
    const newState = update(this.state, {
       posts: {
        [idx]: {
          likes: { $apply: (x) => x + 1 }
        }
      }
    });
    this.setState(newState);
  }
}
