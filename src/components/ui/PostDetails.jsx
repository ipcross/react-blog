import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import DateTime from 'components/elements/DateTime';

const PostDetails = ({author, createdAt}) => (
  <List>
    <List.Item>
      <List.Icon name='user' />
      <List.Content>Author: {author}</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='add to calendar' />
      <List.Content>
        Created: <DateTime>{createdAt}</DateTime>
      </List.Content>
    </List.Item>
  </List>
);

PostDetails.defaultProps = {
  author: 'Default Author'
};

PostDetails.propTypes = {
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string
};

export default PostDetails;
