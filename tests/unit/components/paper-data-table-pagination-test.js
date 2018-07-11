import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Component | paper data table pagination', function(hooks) {
  setupTest(hooks);

  test('startOffset starts at 1', function(assert) {
    assert.equal(this.owner.factoryFor('component:paper-data-table-pagination').create({ page: 1, limit: 10 }).get('startOffset'), 1);
  });

  test('startOffset cannot be negative', function(assert) {
    assert.equal(this.owner.factoryFor('component:paper-data-table-pagination').create({ page: -1, limit: 10 }).get('startOffset'), 1);
  });

  test('startOffset is updated with page and limit', function(assert) {
    const subject = this.owner.factoryFor('component:paper-data-table-pagination').create({ page: 10, limit: 100 });

    assert.equal(subject.get('startOffset'), 901);

    subject.set('page', 2);

    assert.equal(subject.get('startOffset'), 101);

    subject.set('limit', 1);

    assert.equal(subject.get('startOffset'), 2);
  });

  test('endOffset is the sum of startOffset and limit', function(assert) {
    assert.equal(this.owner.factoryFor('component:paper-data-table-pagination').create({ page: 1, limit: 10 }).get('endOffset'), 11);
  });

  test('endOffset is updated with page and limit', function(assert) {
    const subject = this.owner.factoryFor('component:paper-data-table-pagination').create({ page: 10, limit: 100 });

    assert.equal(subject.get('endOffset'), 1001);

    subject.set('page', 2);

    assert.equal(subject.get('endOffset'), 201);

    subject.set('limit', 1);

    assert.equal(subject.get('endOffset'), 3);
  });
});