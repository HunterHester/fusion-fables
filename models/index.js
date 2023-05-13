// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// User hasMany Post
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Post hasOne User
Post.belongsTo(User, {
  foreignKey: 'post_id',
});

// Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// Comment hasOne Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// User hasMany Comment
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Comment hasOne User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { Post, User, Comment };
