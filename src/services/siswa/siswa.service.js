// Initializes the `siswa` service on path `/siswa`
const createService = require('feathers-sequelize');
const createModel = require('../../models/siswa.model');
const hooks = require('./siswa.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');
  const multer = require('multer');
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/siswafoto')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);        
    }
  })
  const upload = multer({ storage: storage});
  const options = {
    name: 'siswa',
    Model,
  };

  // Initialize our service with any options it requires
  app.use('/siswa', upload.single('foto'),createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('siswa');

  service.hooks(hooks);
};
