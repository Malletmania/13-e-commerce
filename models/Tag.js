const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    id:{
      type: 'INTEGER',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: 'STRING'
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Tag',
  }
);

module.exports = Tag;
