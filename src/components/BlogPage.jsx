import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Loader } from 'semantic-ui-react';

import BlogList from 'components/ui/BlogList';
import PieChart from 'components/ui/PieChart';

const BlogPage = (props) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={11}>
        { props.isFetching && <Loader content='Загрузка' /> }
        { props.error && <ErrorMessage /> }
        {
          !props.isFetching && !props.error &&
              <BlogList posts={props.posts} />
        }
      </Grid.Column>
      <Grid.Column width={5}>
        <PieChart columns={[...props.posts.map(post => [post.text,post.likes])]} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

BlogPage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array
};

export default BlogPage;
