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
      references: 'Product.id'
      // ref Product model id
    },
    tag_id: {
      type: 'INTEGER',
      referances: 'Tag.is'
      // ref Tag model id
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Product_Tag',
  }
);


module.exports = ProductTag;
