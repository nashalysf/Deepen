// import the gql `tagged template` function = advanced use of template literals
const { gql } = require("apollo-server-express");

//create typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    followersCount: Int
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
    likes: Int
    comments: [Comments]
  }
  type Comments {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
    repliesCount: Int
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
    posts(username: String): [Post]
    post(_id: ID!): Post
    savedPosts(_id: ID!): Post
    comments(username: String)
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(description: String, username: String!, links: String): Post
    addComment(commentId: ID!, commentBody: String!): Post
    addReply(replyId: ID!, commentBody: String, username: String!): Post
    addFollower(followerId: ID!): User
    savePost(postId: ID!, title: String!)
  }
`;

//export typeDefs
module.exports = typeDefs;
