// Initializes the `jadwalpelajaran` service on path `/jadwalpelajaran`
const createService = require('feathers-sequelize');
const createModel = require('../../models/jadwalpelajaran.model');
const hooks = require('./jadwalpelajaran.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'jadwalpelajaran',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/jadwalpelajaran', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('jadwalpelajaran');

  service.hooks(hooks);
};
