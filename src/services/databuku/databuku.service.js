// Initializes the `databuku` service on path `/databuku`
const createService = require('feathers-sequelize');
const createModel = require('../../models/databuku.model');
const hooks = require('./databuku.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'databuku',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/databuku', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('databuku');

  service.hooks(hooks);
};
