// Initializes the `dataguru` service on path `/dataguru`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dataguru.model');
const hooks = require('./dataguru.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'dataguru',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/dataguru', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dataguru');

  service.hooks(hooks);
};
