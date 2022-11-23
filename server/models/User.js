const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const followerSchema = new Schema(
  {
      // set custom id to avoid confusion with parent comment _id
    followerId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
      username:{
          type: String,
      }
  },
  {
      toJSON: {
          virtuals: true,
          getters: true
      }
    });

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post'
      }
    ],
    savedPosts:  {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    },
    avatar:{
      type: String,
      default: '../../client/src/images/avatar'
    },
    followers: [followerSchema]
  },
  
  {
    toJSON: {
      virtuals: true,
      getters: true
    }
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('followersCount').get(function() {
  return this.followers.length;
});

userSchema.virtual('postCounts').get(function() {
  return this.posts.length;
});



const User = model('User', userSchema);

module.exports = User;
