import MainLayout from 'layouts/MainLayout';

import initialLoad from 'helpers/initialLoad';
import { postsPath } from 'helpers/routes';

import { fetchPosts } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';
import About from 'components/About';
import Contacts from 'components/Contacts';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPosts());
  }
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    if (initialLoad()) return;
    return store.dispatch(fetchPost(params.id));
  }
};

const AboutRoute = {
  path: '/about',
  component: About
};

const ContactsRoute = {
  path: '/contacts',
  component: Contacts
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    AboutRoute,
    ContactsRoute
  ]
};
