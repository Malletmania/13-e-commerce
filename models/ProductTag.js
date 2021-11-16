const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id:{
      type: 'INTEGER',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: 'INTEGER',
      references: {
        model: 'product',
        key: 'id'
      }
      // ref Product model id
    },
    tag_id: {
      type: 'INTEGER',
      references: {
        model: 'tag',
        key: 'id'
      }
      // ref Tag model id
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_Tag',
  }
);


module.exports = ProductTag;
