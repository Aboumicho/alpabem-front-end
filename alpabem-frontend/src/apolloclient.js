
import ApolloClient from 'apollo-boost';

const GRAPHQL_SERVER = "http://localhost:4000/graphql"

export default new ApolloClient({
  uri: GRAPHQL_SERVER,
});