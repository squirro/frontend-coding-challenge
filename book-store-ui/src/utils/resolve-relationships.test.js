import { resolveRelationships } from './resolve-relationships';

describe('resolve-relationships', () => {
  it('should resolve all nested relationships', () => {
    // given
    const response = {
      jsonapi: {
        version: '1.0',
      },
      data: {
        type: 'stores',
        id: '1',
        attributes: {
          name: 'MicroBooks',
          website: 'https://www.micro-books-store.com',
          rating: 4,
          storeImage:
            'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
          establishmentDate: '1995-02-09T00:00:00+0000',
        },
        relationships: {
          countries: {
            data: {
              id: '1',
              type: 'countries',
            },
          },
          books: {
            data: [
              {
                id: '1',
                type: 'books',
              },
              {
                id: '2',
                type: 'books',
              },
              {
                id: '8',
                type: 'books',
              },
            ],
          },
        },
      },
      included: [
        {
          type: 'countries',
          id: '1',
          attributes: {
            code: 'AU',
          },
        },
        {
          type: 'books',
          id: '1',
          attributes: {
            name: 'JavaScript: The Good Parts',
            copiesSold: 154,
          },
          relationships: {
            author: {
              data: {
                id: '1',
                type: 'authors',
              },
            },
          },
        },
        {
          type: 'authors',
          id: '1',
          attributes: {
            fullName: 'Douglas Crockford',
          },
        },
        {
          type: 'books',
          id: '2',
          attributes: {
            name: 'JavaScript: The Definitive Guide',
            copiesSold: 66,
          },
          relationships: {
            author: {
              data: {
                id: '2',
                type: 'authors',
              },
            },
          },
        },
        {
          type: 'authors',
          id: '2',
          attributes: {
            fullName: 'David Flanagan',
          },
        },
        {
          type: 'books',
          id: '8',
          attributes: {
            name: 'JavaScript Pocket Reference: Activate Your Web Pages',
            copiesSold: 47,
          },
          relationships: {
            author: {
              data: {
                id: '2',
                type: 'authors',
              },
            },
          },
        },
      ],
    };

    // when
    const item = resolveRelationships(response);

    // then
    expect(item).toEqual({
      id: '1',
      name: 'MicroBooks',
      website: 'https://www.micro-books-store.com',
      rating: 4,
      storeImage:
        'https://i.pinimg.com/736x/51/a2/47/51a247e0d1785b89b70a17a1c8f31ac5--melbourne-australia-second-hand.jpg',
      establishmentDate: '1995-02-09T00:00:00+0000',
      countries: {
        code: 'AU',
      },
      books: [
        {
          id: '1',
          name: 'JavaScript: The Good Parts',
          copiesSold: 154,
          author: {
            fullName: 'Douglas Crockford',
          },
        },
        {
          id: '2',
          name: 'JavaScript: The Definitive Guide',
          copiesSold: 66,
          author: {
            fullName: 'David Flanagan',
          },
        },
        {
          id: '8',
          name: 'JavaScript Pocket Reference: Activate Your Web Pages',
          copiesSold: 47,
          author: {
            fullName: 'David Flanagan',
          },
        },
      ],
    });
  });
});
