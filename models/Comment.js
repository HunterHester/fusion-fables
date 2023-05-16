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
        comment_body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        // created_at: {
        //     type: DataTypes.DATE,              
        //     get() {
        //         return moment(this.getDataValue('createdAt')).format('DD/MM/YYYY h:mm:ss');
        //     }
        // },
        // updatedAt: {
        //     type: DataTypes.DATE,
        //     get() {
        //         return moment(this.getDataValue('updatedAt')).format('DD/MM/YYYY h:mm:ss');
        //     }
        // }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);
    
    module.exports = Comment;