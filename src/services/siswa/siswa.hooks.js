const { authenticate } = require('@feathersjs/authentication').hooks;

const datasiswa = require('../../hooks/datasiswa');

module.exports = {
  before: {
    all: [ ],
    find: [datasiswa()],
    get: [datasiswa()],
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
