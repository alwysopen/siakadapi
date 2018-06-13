const dataguru = require('./dataguru/dataguru.service.js');
const datasekolah = require('./datasekolah/datasekolah.service.js');
const users = require('./users/users.service.js');
const userdetail = require('./userdetail/userdetail.service.js');
const kelas = require('./kelas/kelas.service.js');
const siswa = require('./siswa/siswa.service.js');
const databuku = require('./databuku/databuku.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(dataguru);
  app.configure(datasekolah);
  app.configure(users);
  app.configure(userdetail);
  app.configure(kelas);
  app.configure(siswa);
  app.configure(databuku);
};
