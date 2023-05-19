/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');
const { roles } = require('../../config/roles');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    async isEmailTaken(email, excludeUserId) {
      const user = await this.findOne({ where: { email, id: excludeUserId } });
      return !!user;
    }

    isPasswordMatch(password) {
      const user = this;
      return bcrypt.compare(password, user.password);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      gender: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      dob: DataTypes.DATE,
      age: DataTypes.STRING,
      maritalStatus: DataTypes.STRING,
      nationality: DataTypes.STRING,
      role: DataTypes.ENUM(roles),
      isEmailVerified: DataTypes.BOOLEAN,
      documentId: DataTypes.STRING,
      documentImage: DataTypes.STRING,
      verificationStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      hooks: {
        beforeCreate: async (user) => {
          user.password = await bcrypt.hash(user.password, 8);
          user.verificationStatus = 'UNVERIFIED';
        },
        beforeUpdate: async (user) => {
          const changed = Array.from(user._changed);
          if (changed.includes('documentId') || changed.includes('documentImage')) {
            user.verificationStatus = 'PENDING VERIFICATION';
          }
        },
      },
    }
  );
  return User;
};
