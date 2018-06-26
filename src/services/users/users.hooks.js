const { authenticate } = require('@feathersjs/authentication').hooks;



const userhook = require('../../hooks/userhook');
const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;



module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt'), userhook()],
    get: [authenticate('jwt'), userhook()],
    create: [ hashPassword() ],
    update: [ hashPassword(),  authenticate('jwt') ],
    patch: [ hashPassword(),  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
