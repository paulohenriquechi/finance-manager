'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Items.belongsTo(models.Users, {
        foreignKey: "user_id"
      });
    }
  }
  Items.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    installments: DataTypes.INTEGER(20, 2),
    type: DataTypes.STRING,
    purchaseDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};