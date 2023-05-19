const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Revision extends Model {}

Revision.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        revision_body: {
            type: DataTypes.TEXT,
            allowNull: false,
            defaultValue: '',
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'revision',
    }
);
    
module.exports = Revision;