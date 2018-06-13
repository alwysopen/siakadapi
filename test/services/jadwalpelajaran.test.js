const assert = require('assert');
const app = require('../../src/app');

describe('\'jadwalpelajaran\' service', () => {
  it('registered the service', () => {
    const service = app.service('jadwalpelajaran');

    assert.ok(service, 'Registered the service');
  });
});
