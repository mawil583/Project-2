module.exports = function (sequelize, DataTypes) {
    const Purchases = sequelize.define("purchases", {
      purchase_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      category: {
        type: DataTypes.STRING,
        allowNull: true
      },
      item_name: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      freezeTableName: true,
    }
    );
    Purchases.associate = function(models) {
        Purchases.belongsTo(models.user, {
            foreignKey: {
                allowNull: false
            }
        })
    }
  
    return Purchases;
  };