// import the gql `tagged template` function = advanced use of template literals
const { gql } = require("apollo-server-express");

//create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    followersCount: Int
    postCounts: Int
    posts: [Post]
    followers: [User]
  }
  type Post {
    _id: ID
    description: String
    createdAt: String
    username: String
    img: String
    snippet: String
    links: String
    likeCount: Int
    commentCount: Int
    comments: [Comments]
  }
  type Comments {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
    replyCount: Int
    replies: [Reply]
  }
  type Reply {
    _id: ID
    replyBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(_id: ID!): Post
    savedPosts(_id: ID!): Post
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(description: String, username: String!, links: String): Post
    addComment(commentId: ID!, commentBody: String, username: String!): Post
    addReply(replyId: ID!, commentBody: String, username: String!): Post
    addFollower(followerId: ID!, username: String!): User
    savePost(postId: ID!, title: String!): User
  }
`;

//export typeDefs
module.exports = typeDefs;
