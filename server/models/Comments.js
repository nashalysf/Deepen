const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const Reply = require("./Replies");

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    reply: [Reply],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

Reply.virtual("replyCount").get(function () {
  return this.reply.length;
}
);

module.exports = commentSchema;
