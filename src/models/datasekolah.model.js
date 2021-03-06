// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datasekolah = sequelizeClient.define('sekolah', {
    namasekolah: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idsekolah: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  datasekolah.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return datasekolah;
};
