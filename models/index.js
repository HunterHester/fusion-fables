// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// User hasMany Post
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Post hasOne User
Post.hasOne(User, {
  foreignKey: 'user_id',
});

// Comment hasOne Post
Comment.hasOne(Post, {
  foreignKey: 'post_id',
});

module.exports = { Post, User, Comment };
