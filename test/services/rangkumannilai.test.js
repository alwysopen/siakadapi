const assert = require('assert');
const app = require('../../src/app');

describe('\'rangkumannilai\' service', () => {
  it('registered the service', () => {
    const service = app.service('rangkumannilai');

    assert.ok(service, 'Registered the service');
  });
});
