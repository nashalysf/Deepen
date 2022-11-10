const db = require('../config/connection');
const { User, Post } = require('../models');

const userData = require('./userData.json');
const postData = require('./userData.json');

//
db.once('open', async () => {
    //clean database
    await User.deleteMany({});
    await Post.deleteMany({});

    //bulk create each model
    const Users = await User.insertMany(userData);
    const Posts = await Post.insertMany(postData);

    console.log('test')
    process.exit(0);
});