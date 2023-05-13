const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    }
}


Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "post",
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: 'id'
            }
        },
// This should create a timestamp?
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            createdAt,
        },
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
        }
    );
    
    module.exports = User;