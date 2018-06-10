const { authenticate } = require('@feathersjs/authentication').hooks;



const userhook = require('../../hooks/userhook');



module.exports = {
  before: {
    all: [],
    find: [authenticate('jwt'), userhook()],
    get: [authenticate('jwt'), userhook()],
    create: [  ],
    update: [  authenticate('jwt') ],
    patch: [  authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
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
