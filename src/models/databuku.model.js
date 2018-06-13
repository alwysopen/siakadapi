// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const databuku = sequelizeClient.define('daftarbuku', {
    namabuku: {
      type: DataTypes.STRING,
      allowNull: false
    },
    penerbit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    penulis: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tahunterbit: {
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
  databuku.associate = function (models) {
    const Pemain = models.sekolah;
    const Timajah  = models.daftarbuku;
    Timajah.belongsTo(Pemain,{targetKey:'idsekolah',foreignKey:'idsekolah'});
   
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return databuku;
};
