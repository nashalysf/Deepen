const { User, Post } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const cloudinary = require("cloudinary");
cloudinary.config({
  cloud_name: "da1sqgyhy",
  api_key: "586147262945715",
  api_secret: "uqYtDzPTrotRC4nI06x9W1L48jc",
});
const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("posts")
          .populate("followers");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    //get single thought
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    follower: async (parent, {  _id }) => {
      return User.findById(_id);
    },

    //commented out comments for now. in order to populate it user model needs to reference it. requires reference in typeDefs as well.
    users: async () => {
      return User.find()
        .select("-__v")
        .populate("followers")
        .populate("posts")
        // .populate("comments");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("followers")
        .populate("posts");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({...args, username: context.user.username });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    deletePost: async (parent,  postId , context) => {
     
      if (postId) {
        const updatePostList = await Post.findByIdAndRemove(postId);
        return updatePostList;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    savePost: async (parent, args, context) => {
        if (context.user) {
            const updatedList = await User.findOneAndUpdate(
              { _id: postId },
              { $push: { savedPosts: { posts: post._id , username: context.user.username, } } },
              { new: true, runValidators: true }
            );
        
            return updatedPost;
          }
        
          throw new AuthenticationError('You need to be logged in!');
        },
    addComment: async (parent, { postId, commentBody }, context) => {
        if (context.user) {
          const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $push: { comments: { commentBody, username: context.user.username } } },
            { new: true, runValidators: true }
          );
      
          return updatedPost;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      addLike: async (parent, { postId, likeCount }, context) => {
        if (context.user) {
          const updatedPost = await Post.findOneAndUpdate(
            { _id: postId },
            { $set: { likeCount: likeCount++ } },
          );
      
          return updatedPost;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      addReply: async (parent, { commentId, replyBody }, context) => {
        if (context.user) {
          const updatedComment = await Comment.findOneAndUpdate(
            { _id: commentId },
            { $push: { reply: { replyBody, username: context.user.username } } },
            { new: true, runValidators: true }
          );
      
          return updatedComment;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      addFollower: async (parent, { username }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $push: { followers: {username: username }} },
            { new: true, runValidators: true }
          ).populate('followers');
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      addCollaborator: async (parent, { postId, username }, context) => {
        if (context.user) {
          const updatedUser = await Post.findOneAndUpdate(
            { _id: postId },
            { $push: { collaborators: username} },
            { new: true, runValidators: true }
          ).populate('collaborators');
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      uploadPhoto: async (_, { photo, username }, context) => {
       

        //initialize cloudinary
        
              /*
        try-catch block for handling actual image upload
        */
        try {
          const result = await cloudinary.v2.uploader.upload(photo, {
        //here i chose to allow only jpg and png upload
            allowed_formats: ["jpg", "png"],
        //generates a new id for each uploaded image
            public_id: "",
        /*creates a folder called "your_folder_name" where images will be stored.
        */
            folder: "your_folder_name2",
          });
          console.log(result);
          if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
              { username:username },
              { $set: { avatar:   result.url } },
              { new: true, runValidators: true }
            );
        
            return updatedUser;}
        } catch (e) {
        //returns an error message on image upload failure.
          return `Image could not be uploaded:${e.message}`;
        }
        /*returns uploaded photo url if successful `result.url`.
        if we were going to store image name in database,this
        */
      
       
        },
      
  },
};

module.exports = resolvers;
