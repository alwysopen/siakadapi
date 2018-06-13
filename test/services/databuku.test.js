const assert = require('assert');
const app = require('../../src/app');

describe('\'databuku\' service', () => {
  it('registered the service', () => {
    const service = app.service('databuku');

    assert.ok(service, 'Registered the service');
  });
});
