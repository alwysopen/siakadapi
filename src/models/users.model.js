// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
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
  users.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    const Player = models.sekolah;
    const Team  = models.users;
    Team.belongsTo(Player,{targetKey:'idsekolah', foreignKey:'idsekolah'});
    const PlayerNOOB = models.userdetail;
    const TeamNOOB  = models.users;
    TeamNOOB.belongsTo(PlayerNOOB,{targetKey:'id', foreignKey:'iduserdetail'});
  };

  return users;
};