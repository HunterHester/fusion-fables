const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8-20],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newBlogData) => {
        newBlogData.password = await bcrypt.hash(newBlogData.password, 10);
        newBlogData.email = await bcrypt.hash(newBlogData.email, 10);
        return newBlogData;
      },
      beforeUpdate: async (updatedBlogData) => {
        updatedBlogData.password = await bcrypt.hash(
          updatedBlogData.password,
          10
        );
        updatedBlogData.email = await bcrypt.hash(newBlogData.email, 10);
        return updatedBlogDBlog;
      },
    },
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;
