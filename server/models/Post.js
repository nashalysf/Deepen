const { Schema, model } = require("mongoose");
const Comments = require("./Comments");
const dateFormat = require("../utils/dateFormat");

const likeSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);
const postSchema = new Schema(
  {
    title: {
      type: String,
    },
    postId: {
              type: String, 
              required: false,
          }, 
    description: {
      type: String,
      required: false,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    username: {
      type: String,
      required: true,
    },

    img: {
      type: String,
    },

    snippet: {
      type: String,
    },

    links: {
      type: String,
      required: false,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    tools:[String],
    comments: [Comments],

    likes: [likeSchema],
  },
  {
    toJSON: {
      getters: true,
    }
  }
);


Comments.virtual("commentCount").get(function () {
  return this.comments.length;
});
likeSchema.virtual("likeCount").get(function () {
  return this.likes.length;
});

const Post = model("Post", postSchema);

module.exports = Post;
