// Initializes the `datasekolah` service on path `/datasekolah`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datasekolah.model');
const hooks = require('./datasekolah.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datasekolah',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/datasekolah', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datasekolah');

  service.hooks(hooks);
};
