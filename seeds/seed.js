const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
    console.log('---------- \n USERS seeded... \n ----------');
  await seedPosts();
    console.log('---------- \n POSTS seeded... \n ----------');
  await seedComments();
    console.log('---------- \n COMMENTS seeded... \n ----------');

  process.exit(0);
};

seedAll();

