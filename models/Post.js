const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    }
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
            numComments: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            },
            date: {
            type: DataTypes.DATE,
            allowNull: false,
            },
            time: {
            type: Datatypes.OBJ,
            allowNull: false,
            }
    },
    {
        hooks: {
            beforeCreate: async (newBlogData) => {
            newBlogData.password = await bcrypt.hash(newBlogData.password, 10);
            return newBlogData;
            },
            beforeUpdate: async (updatedBlogData) => {
            updatedBlogData.password = await bcrypt.hash(updatedBlogData.password, 10);
            return updatedBlogDBlog
            },
        },
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'post',
        }
    );
    
    module.exports = Post;