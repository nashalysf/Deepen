const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const replySchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    replyId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    replyBody: {
      type: String,
      require: true,
      trim: true,
      max: 280,
    },
    username: {
      type: String,
      require: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

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
    reply: [replySchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

replySchema.virtual("replyCount").get(function () {
  return this.reply.length;
}
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;
