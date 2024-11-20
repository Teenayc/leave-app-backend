const Sequelize = require('sequelize');
const defaultValue = Sequelize.literal(`DATE_ADD(CURRENT_TIMESTAMP, INTERVAL 2 HOUR)`);

module.exports = function(sequelize, DataTypes) {
  const applications = sequelize.define('applications', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    application_type: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    reasons: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    attached_doc: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    date_from: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_to: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    number_of_days: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: defaultValue
    },
    theTime: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: defaultValue
    },

  }, {
    sequelize,
    tableName: 'applications',
    timestamps: false,
  });

  return applications;
};
