// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// User hasMany Post

// Post hasMany Comments

// Post hasOne User

// Comment hasOne Post

module.exports = { Post, User, Comment };
