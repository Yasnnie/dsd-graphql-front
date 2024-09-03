import { gql } from "@apollo/client";

export const GET_DATA = gql`
  query GetProjects {
    projects {
      technologies
      name
      link
      id
      description
    }
    user {
      age
      description
      name
    }
  }
`;
