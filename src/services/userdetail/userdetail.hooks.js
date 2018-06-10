const { authenticate } = require('@feathersjs/authentication').hooks;

const userdetail = require('../../hooks/userdetail');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [userdetail()],
    get: [userdetail()],
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
