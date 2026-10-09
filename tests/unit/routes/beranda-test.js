import { module, test } from 'qunit';
import { setupTest } from 'absensi-mahasiswa/tests/helpers';

module('Unit | Route | beranda', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:beranda');
    assert.ok(route);
  });
});
