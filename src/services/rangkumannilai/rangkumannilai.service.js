// Initializes the `rangkumannilai` service on path `/rangkumannilai`
const createService = require('feathers-sequelize');
const createModel = require('../../models/rangkumannilai.model');
const hooks = require('./rangkumannilai.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'rangkumannilai',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/rangkumannilai', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('rangkumannilai');

  service.hooks(hooks);
};
