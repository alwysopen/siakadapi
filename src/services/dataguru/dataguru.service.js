// Initializes the `dataguru` service on path `/dataguru`
const createService = require('feathers-sequelize');
const createModel = require('../../models/dataguru.model');
const hooks = require('./dataguru.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');
  const multer = require('multer');
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/gurufoto')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);        
    }
  })
  const upload = multer({ storage: storage});
  const options = {
    name: 'dataguru',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/dataguru', upload.single('foto'), createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('dataguru');

  service.hooks(hooks);
};
