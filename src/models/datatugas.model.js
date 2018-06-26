// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datatugas = sequelizeClient.define('datatugas', {
    judul: {
      type: DataTypes.STRING,
      allowNull: false
    },
    deskripsi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    attachment: {
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
  datatugas.associate = function (models) {
    // Define associations here
    const Pemain = models.sekolah;
    const Timajah  = models.datatugas;
    Timajah.belongsTo(Pemain,{targetKey:'idsekolah',foreignKey:'idsekolah'});
    const PemainNoob = models.kelas;
    Timajah.belongsTo(PemainNoob,{targetKey:'id',foreignKey:'idkelas'});
 
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return datatugas;
};
