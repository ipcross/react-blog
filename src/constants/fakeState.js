export const fakeState = {
  posts: {
    isFetching: false,
    error: false,
    entries: {
      posts: [
        {
          id: 10,
          title: 'Violets',
          description: 'Narcissus were well known in ancient civilisation, both medicinally and botanically, but formally described by Linnaeus in his Species Plantarum (1753). The genus is generally considered to have about ten sections with approximately 50 species.',
          meta: {
            likes: 9,
            author: 'user_10',
            createdAt: '2017-07-27T14:54:32.006Z'
          },
          image: {
            src: 'http://192.168.23.148:3001/flower10.jpg'
          },
          comments: [],
          files: []
        }
      ],
      meta: {
        current_page: 1,
        next_page: 2,
        prev_page: null,
        total_pages: 2,
        total_count: 10,
        per_page: 5
      }
    }
  },
  post: {
    isFetching: false,
    error: false,
    entry: {
      post: {
        id: 10,
        title: 'Violets',
        description: 'Narcissus were well known in ancient civilisation, both medicinally and botanically, but formally described by Linnaeus in his Species Plantarum (1753). The genus is generally considered to have about ten sections with approximately 50 species.',
        meta: {
          likes: 9,
          author: 'user_10',
          createdAt: '2017-07-27T14:54:32.006Z'
        },
        image: {
          src: 'http://192.168.23.148:3001/flower10.jpg'
        },
        comments: [],
        files: []
      }
    }
  },
  form: {}
};
