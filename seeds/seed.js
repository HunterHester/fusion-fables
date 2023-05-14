const sequelize = require('../config/connection');
const seedUsers = require('./postData');
const seedPosts = require('./userData');
const seedComments = require('./commentData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();