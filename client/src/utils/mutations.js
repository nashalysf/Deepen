import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_FOLLOWER = gql`
  mutation addFollower( $username: String!) {
    addFollower(  username: $username) {
      _id
      username
      followersCount
      followers {
        _id
        username
      }
    }
  }
`;
export const ADD_POST = gql`
  mutation addPost($description: String!, $title: String!, $tools: [String!]!) {
    addPost(description: $description, title: $title, tools: $tools) {
      _id
      title
      description
      createdAt
      username
      commentCount
      likeCount
      tools
      comments {
        _id
      }
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      likeCount
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(_id: $id) {
      _id
      title
      description
      createdAt
      username
      commentCount
      likeCount
      tools
      comments {
        _id
      }
    }
  }
`;
