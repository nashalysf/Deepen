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
    password: String
    avatar: String
  }
  type Post {
    _id: ID
    title: String
    description: String
    createdAt: String
    username: String
    tools: [String]
    likeCount: Int
    commentCount: Int
    collaborators: [String]
    comments: [Comments]
    user: [User]
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
 
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    posts: [Post]
    post(_id: ID!): Post
    savedPosts(_id: ID!): [Post]
    follower(username: String!): [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(description: String!, title: String!, tools: [String!] ): Post
    addComment(postId: ID!, commentBody: String!): Post
    addReply(replyId: ID!, replyBody: String, username: String!): Post
    addFollower(username: String!): User
    savePost(postId: ID!, title: String!): User
    deleteUser(username: String!, password: String!): Auth
    deletePost(_id: ID!): Post
    addLike(postId: ID!, likeCount: Int): Post
    addCollaborator(postId: ID!, username: String!): Post
  }
  type Auth {
    token: ID!
    user: User
  }
`;

//export typeDefs
module.exports = typeDefs;
