const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite'
});

const Post = sequelize.define('Post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  upvotes: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
});

sequelize.sync();

module.exports = {
  sequelize,
  Post
};
