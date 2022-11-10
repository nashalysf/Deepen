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
    description: {
      type: String,
      required: "You need to leave a post",
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