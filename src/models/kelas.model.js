// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const kelas = sequelizeClient.define('kelas', {
    namakelas: {
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
  kelas.associate = function (models) {
    const Pemain = models.sekolah;
    const Timajah  = models.kelas;
    Timajah.belongsTo(Pemain,{targetKey:'idsekolah',foreignKey:'idsekolah'});
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return kelas;
};
