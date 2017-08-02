import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import Link from 'components/elements/Link';
import { fakeStore } from 'helpers/fakeStore'
import { fakeState } from 'constants/fakeState'

import BlogItem from 'components/ui/BlogItem';

describe('BlogItem', () => {
  let state = fakeState;
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={fakeStore(state)}><BlogItem /></Provider>, div);
  });
  
  describe('render', () => {
    it('should render the title', () => {
      const itemProps = { title: 'Hello, World!', id: 5 };

      const item = shallow(<BlogItem post={itemProps} />);
      const header = <Link to="/posts/5">Hello, World!</Link>;

      expect(item.contains(header)).toEqual(true);
    });

    it('should render usual item', () => {
      const itemProps = {
        title: 'Hello, World!',
        id: 5,
        image: {
          alt: 'Hello, World',
          src: '/images/World.jpg'
        }
      };

      const item = shallow(<BlogItem post={itemProps} />);

      expect(item).toMatchSnapshot();
    })
  });
});