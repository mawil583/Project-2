const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define(
    "user",
    {
      email: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.TEXT
      }
    },
    {
      underscored: true,
      freezeTableName: true
    }
  );
  User.associate = function(models) {
    User.hasMany(models.finance, {
      onDelete: "cascade"
    });
  };

  User.associate = function(models) {
    User.hasMany(models.purchases, {
      onDelete: "cascade"
    });
  };

  User.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
  };

  User.validPassword = function(inputPwd, dbPwd) {
    return bcrypt.compareSync(inputPwd, dbPwd);
  };

  return User;
};
