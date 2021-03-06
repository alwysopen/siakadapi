// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const siswa = sequelizeClient.define('siswa', {
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jeniskelamin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomortelpon: {
      type: DataTypes.STRING,
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
  siswa.associate = function (models) {
    const Pemain = models.sekolah;
    const Timajah  = models.siswa;
    Timajah.belongsTo(Pemain,{targetKey:'idsekolah',foreignKey:'idsekolah'});
    const PemainNoob = models.kelas;
    Timajah.belongsTo(PemainNoob,{targetKey:'id',foreignKey:'idkelas'});
 
 
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return siswa;
};
