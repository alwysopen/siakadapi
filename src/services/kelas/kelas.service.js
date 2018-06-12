// Initializes the `kelas` service on path `/kelas`
const createService = require('feathers-sequelize');
const createModel = require('../../models/kelas.model');
const hooks = require('./kelas.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'kelas',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/kelas', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('kelas');

  service.hooks(hooks);
};
