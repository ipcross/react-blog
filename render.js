import React from 'react';
import ReactDOMServer from 'react-dom/server';

import BlogPage from './src/components/containers/BlogPage';

const result = ReactDOMServer.renderToString(
  React.createElement(BlogPage)
);

console.log(result)
