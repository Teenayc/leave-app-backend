const Sequelize = require('sequelize');
const defaultValue = Sequelize.literal(`DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 2 HOUR)`);

module.exports = function(sequelize, DataTypes) {
  const users = sequelize.define('users', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    user_role: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue:defaultValue
    },
    theTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue:defaultValue
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false,
  });


  return users;
};
