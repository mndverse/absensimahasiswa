import { module, test } from 'qunit';
import { setupTest } from 'absensi-mahasiswa/tests/helpers';

module('Unit | Controller | beranda', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:beranda');
    assert.ok(controller);
  });
});
