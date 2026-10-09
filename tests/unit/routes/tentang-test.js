import { module, test } from 'qunit';
import { setupTest } from 'tugas-ember/tests/helpers';

module('Unit | Route | tentang', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tentang');
    assert.ok(route);
  });
});
