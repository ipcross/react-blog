import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Loader } from 'semantic-ui-react';

import Helmet from 'react-helmet';

import PieChartContainer from 'containers/PieChartContainer';
import BlogList from 'components/ui/BlogList';

const BlogPage = (props) => (
  <div>
    <Helmet title='Список постов' />
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
          <PieChartContainer posts={props.posts} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
);

BlogPage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.array
};

export default BlogPage;
