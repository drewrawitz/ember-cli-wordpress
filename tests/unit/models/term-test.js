import { moduleForModel, test } from 'ember-qunit';

moduleForModel('term', 'Unit | Model | term', {
  // Specify the other units that are required for this test.
  needs: ['model:post']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
