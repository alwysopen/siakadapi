const assert = require('assert');
const app = require('../../src/app');

describe('\'datatugas\' service', () => {
  it('registered the service', () => {
    const service = app.service('datatugas');

    assert.ok(service, 'Registered the service');
  });
});
