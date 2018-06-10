const assert = require('assert');
const app = require('../../src/app');

describe('\'userdetail\' service', () => {
  it('registered the service', () => {
    const service = app.service('userdetail');

    assert.ok(service, 'Registered the service');
  });
});
