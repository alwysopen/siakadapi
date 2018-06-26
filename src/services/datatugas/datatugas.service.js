// Initializes the `datatugas` service on path `/datatugas`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datatugas.model');
const hooks = require('./datatugas.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datatugas',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/datatugas', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datatugas');

  service.hooks(hooks);
};
