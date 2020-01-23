import gql from "graphql-tag";

export default gql`
  mutation updateGod($id: ID!, $name: String) {
    updateGod(id: $id, name: $name) {
      id
      name
    }
  }
`;