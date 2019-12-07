module.exports = function (sequelize, DataTypes) {
  const Finance = sequelize.define("finance", {
    finance_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    mortgage_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    mortgage_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    utilities_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    utilities_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    food_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    food_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    insurance_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    insurance_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    transportation_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    transportation_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    fun_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    fun_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    savings_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    savings_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    debt_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    debt_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    misc_b: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    misc_e: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    month: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    }
  },
  {
    freezeTableName: true,
  }
  );
  Finance.associate = function(models) {
      Finance.belongsTo(models.user, {
          foreignKey: {
              allowNull: false
          }
      })
  }

  return Finance;
};