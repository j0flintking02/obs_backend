/* eslint-disable no-unused-vars */
const { Model } = require('sequelize');
const { tokenTypes } = require('../../config/tokens');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(Token, {
        foreignKey: 'user',
      });
    }
  }
  Token.init(
    {
      token: DataTypes.STRING,
      user: DataTypes.STRING,
      expires: DataTypes.DATE,
      type: DataTypes.ENUM([tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL]),
      blacklisted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Token',
    }
  );
  return Token;
};
