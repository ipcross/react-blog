import MainLayout from 'layouts/MainLayout';

import { postsPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import About from 'components/About.jsx';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const AboutRoute = {
  path: '/about',
  component: About
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute
  ]
};