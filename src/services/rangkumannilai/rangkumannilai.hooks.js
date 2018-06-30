const { authenticate } = require('@feathersjs/authentication').hooks;

const siswa = require('../../hooks/siswa');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [siswa()],
    get: [siswa()],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
