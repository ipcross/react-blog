import moment from 'moment';

export const posts = [
  {
    id: 1,
    text: 'Text1',
    likes: 1,
    image: {
      src: 'dist/images/world.png',
      alt: 'alt1',
      style: {width: 100, height: 100}
    },
    details: {
      author: 'Author1',
      createdAt: moment('20170520', 'YYYYMMDD').fromNow(),
      updatedAt: moment().startOf('day')
        .fromNow()
    }
  },
  {
    id: 2,
    text: 'Text2',
    likes: 2,
    image: {
      src: 'dist/images/earth.png',
      alt: 'alt2',
      style: {width: 100, height: 100}
    },
    details: {
      author: 'Author2',
      updatedAt: moment().startOf('day')
        .fromNow()
    }
  },
  {
    id: 3,
    text: 'Text3',
    likes: 3,
    image: {
      src: 'dist/images/mars.png',
      alt: 'alt3',
      style: {width: 100, height: 100}
    },
    details: {
      author: 'Author3',
      createdAt: moment('20170601', 'YYYYMMDD').fromNow()
    }
  }
];
