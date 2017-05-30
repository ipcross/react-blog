import React from 'react';

import BlogList from '../ui/BlogList';

const post1 = {
    id: 1,
    image: {
      src: "url1",
      alt: "alt1",
      style: {width: 100, height: 100}
    },
    text: 'Text1'
  }

const post2 = {
    id: 2,
    image: {
      src: "url2",
      alt: "alt2",
      style: {width: 100, height: 100}
    },
    text: 'Text2'
  }

const post3 = {
    id: 3,
    image: {
      src: "url3",
      alt: "alt3",
      style: {width: 100, height: 100}
    },
    text: 'Text3'
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
