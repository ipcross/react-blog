import React from 'react';
import PropTypes from 'prop-types';

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || 0
    }
    this.incrementLikes = this.incrementLikes.bind(this)
  }

  incrementLikes() {
    this.setState({ likes: this.state.likes + 1 })
  }

  render() {
    return (
      <div>
        {this.state.likes}
        <button onClick={this.incrementLikes} >+</button>
      </div>
    );
  }
}

Likes.defaultProps = {
  likes: 0
}

Likes.propTypes = {
  likes: PropTypes.number.isRequired
}

export default Likes;
