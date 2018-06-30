// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const rangkumannilai = sequelizeClient.define('rangkumannilai', {
    uts: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    harian: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ukk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tugas: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  rangkumannilai.associate = function (models) {
    const Pemain = models.sekolah;
    const Timajah  = models.rangkumannilai;
    Timajah.belongsTo(Pemain,{targetKey:'idsekolah',foreignKey:'idsekolah'});
    const PemainNoob = models.kelas;
    Timajah.belongsTo(PemainNoob,{targetKey:'id',foreignKey:'idkelas'});
    const siswaSekolah = models.siswa;
    Timajah.belongsTo(siswaSekolah,{targetKey:'id',foreignKey:'idsiswa'});
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return rangkumannilai;
};
