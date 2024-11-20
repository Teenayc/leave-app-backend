const Sequelize = require('sequelize');
const defaultValue = Sequelize.literal(`DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 2 HOUR)`);

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('audit_trail', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dump: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: defaultValue
    },
    theTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: defaultValue
    }
  }, {
    sequelize,
    tableName: 'audit_trail',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "user",
        using: "BTREE",
        fields: [
          { name: "user" },
        ]
      },
      {
        name: "action",
        using: "BTREE",
        fields: [
          { name: "action" },
        ]
      },
    ]
  });
};
