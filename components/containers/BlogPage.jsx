import React from 'react';
import moment from 'moment';

import BlogList from '../ui/BlogList';

const post1 = {
    id: 1,
    image: {
      src: "url1",
      alt: "alt1",
      style: {width: 100, height: 100}
    },
    text: 'Text1',
    details: {
      author: "Author1",
      createdAt: moment("20170520", "YYYYMMDD").fromNow(),
      updatedAt: moment().startOf('day').fromNow(),
      likes: 1
    }
  }

const post2 = {
    id: 2,
    image: {
      src: "url2",
      alt: "alt2",
      style: {width: 100, height: 100}
    },
    text: 'Text2',
    details: {
      author: "Author2",
      updatedAt: moment().startOf('day').fromNow(),
      likes: 2
    }
  }

const post3 = {
    id: 3,
    image: {
      src: "url3",
      alt: "alt3",
      style: {width: 100, height: 100}
    },
    text: 'Text3',
    details: {
      author: "Author3",
      createdAt: moment("20170601", "YYYYMMDD").fromNow(),
      likes: 3
    }
  }

const posts = [ post1, post2, post3];

class BlogPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {posts};
  }

  render() {
    const {posts} = this.state;
    return React.createElement(BlogList, {posts});
  }
}

export default BlogPage;
