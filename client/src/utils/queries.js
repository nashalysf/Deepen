import { gql } from "@apollo/client";

export const QUERY_POSTS = gql`
  query posts {
    posts {
      _id
      description
      title
      createdAt
      username
      likeCount
      commentCount
      tools
      collaborators
      comments {
        _id
        commentBody
        createdAt
        username
        replyCount
        replies {
          _id
          replyBody
          createdAt
          username
        }
      }
    }
  }
`;
export const QUERY_COMMENTS = gql`
  query comments($id: ID!) {
    posts(_id: $id) {
      _id
      commentBody
      username
      replyCount
      createdAt
      replies
    }
  }
`;


export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      description
      createdAt
      username
      title
      tools
      img: String
      snippet: String
      links: String
      likeCount
      commentCount
      collaborators
      comments {
        _id
        createdAt
        username
        commentBody
      }
    }
  }
`;
export const QUERY_FOLLOWER = gql`
  query follower($username: String!) {
    follower(username: $username) {
      _id
      username
      email
      postCounts
      followersCount
      followers {
        _id
        username
      }
      posts {
        _id
        title
        description
        createdAt
        likeCount
        commentCount
      }
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      postCounts
      followersCount
      followers {
        _id
        username
      }
      posts {
        _id
        title
        description
        createdAt
        likeCount
        commentCount
      }
    }
  }
`;
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      followersCount
      posts {
        _id
        title
        description
        createdAt
        likeCount
        comments {
          _id
          createdAt
          commentBody
          username
        }
      }
      followers {
        _id
        username
      }
    }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      followersCount
      followers {
        _id
        username
      }
      postCounts
      posts
    }
  }
`;
