// Initializes the `userdetail` service on path `/userdetail`
const createService = require('feathers-sequelize');
const createModel = require('../../models/userdetail.model');
const hooks = require('./userdetail.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'userdetail',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/userdetail', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('userdetail');

  service.hooks(hooks);
};
