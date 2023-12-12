import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const DELETE_BOOK = gql`
  mutation deleteBook($bookId: ID!) {
    deleteBook(bookId: $bookId) {
      _id
    }
  }
`;