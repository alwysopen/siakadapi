const assert = require('assert');
const app = require('../../src/app');

describe('\'datasekolah\' service', () => {
  it('registered the service', () => {
    const service = app.service('datasekolah');

    assert.ok(service, 'Registered the service');
  });
});
