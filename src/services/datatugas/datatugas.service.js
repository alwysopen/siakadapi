// Initializes the `datatugas` service on path `/datatugas`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datatugas.model');
const hooks = require('./datatugas.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const options = {
    name: 'datatugas',
    Model
  };
  const multer = require('multer');
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/attachmenttugas')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);        
    }
  })
  const upload = multer({ storage: storage});
  // Initialize our service with any options it requires
  app.use('/datatugas', upload.single('attachment'),createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datatugas');

  service.hooks(hooks);
};
