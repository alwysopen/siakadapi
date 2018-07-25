// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const userdetail = sequelizeClient.define('userdetail', {
    namalengkap: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jeniskelamin: {
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
  userdetail.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    const Player = models.kelas;
    const Team  = models.userdetail;
    Team.belongsTo(Player,{targetKey:'id',foreignKey:'idkelas'});
    const Timajah  = models.userdetail;
    const user = models.users;
    Timajah.belongsTo(user,{targetKey:'id',foreignKey:'iduser'})
  };

  return userdetail;
};
