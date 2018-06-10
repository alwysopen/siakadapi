const assert = require('assert');
const app = require('../../src/app');

describe('\'dataguru\' service', () => {
  it('registered the service', () => {
    const service = app.service('dataguru');

    assert.ok(service, 'Registered the service');
  });
});
