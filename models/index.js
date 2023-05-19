// import models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');
const Revision = require('./Revision');

// User hasMany Post
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Post hasOne User
Post.belongsTo(User, {
  foreignKey: 'user_id',
});

// Post hasMany Comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
});

// Comment belongsTo Post
Comment.belongsTo(Post, {
  foreignKey: 'post_id',
});

// User hasMany Comment
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

// Comment belongsTo User
Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

// Post hasMany Revision
Post.hasMany(Revision, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Revision belongsTo Post
Revision.belongsTo(Post, {
  foreignKey: 'post_id'
});

// User hasMany Revision
User.hasMany(Revision, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Revision belongsTo User
Revision.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { Post, User, Comment, Revision };
