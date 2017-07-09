import MainLayout from 'layouts/MainLayout';

import { postsPath } from 'helpers/routes';

import BlogPage from 'components/containers/BlogPage.jsx';
import Post     from 'components/containers/Post.jsx';
import About     from 'components/containers/About.jsx';

const Index = {
  path: '/',
  component: BlogPage
};

const PostRoute = {
  path: postsPath(),
  component: Post
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
