// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const jadwalpelajaran = sequelizeClient.define('jadwalpelajaran', {
    jadwalpelajaran: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jammasuk: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jamkeluar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hari: {
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
  jadwalpelajaran.associate = function (models) {
    const Pemain = models.sekolah;
    const Timajah  = models.jadwalpelajaran;
    Timajah.belongsTo(Pemain,{targetKey:'idsekolah',foreignKey:'idsekolah'});
    const PemainNoob = models.kelas;
    Timajah.belongsTo(PemainNoob,{targetKey:'id',foreignKey:'idkelas'});
 
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return jadwalpelajaran;
};
