import { gql } from '@apollo/client';

// may need to be QUERY_ME
export const GET_ME = gql`
    query me {
        me {
            _id
            username
            bookCount
            savedBooks
        }
    }
`;