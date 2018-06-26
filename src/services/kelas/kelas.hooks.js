
const { authenticate } = require('@feathersjs/authentication').hooks;

const kelashook = require('../../hooks/kelashook');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [kelashook()],
    get: [kelashook()],
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
