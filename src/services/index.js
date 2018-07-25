const dataguru = require('./dataguru/dataguru.service.js');
const datasekolah = require('./datasekolah/datasekolah.service.js');
const users = require('./users/users.service.js');
const userdetail = require('./userdetail/userdetail.service.js');
const kelas = require('./kelas/kelas.service.js');
const siswa = require('./siswa/siswa.service.js');
const databuku = require('./databuku/databuku.service.js');
const jadwalpelajaran = require('./jadwalpelajaran/jadwalpelajaran.service.js');
const datatugas = require('./datatugas/datatugas.service.js');
const rangkumannilai = require('./rangkumannilai/rangkumannilai.service.js');
const berita = require('./berita/berita.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(dataguru);
  app.configure(datasekolah);
  app.configure(users);
  app.configure(userdetail);
  app.configure(kelas);
  app.configure(siswa);
  app.configure(databuku);
  app.configure(jadwalpelajaran);
  app.configure(datatugas);
  app.configure(rangkumannilai);
  app.configure(berita);
};
