import { module, test } from 'qunit';
import { setupTest } from 'tugas-ember/tests/helpers';

module('Unit | Route | mahasiswa', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:mahasiswa');
    assert.ok(route);
  });
});
