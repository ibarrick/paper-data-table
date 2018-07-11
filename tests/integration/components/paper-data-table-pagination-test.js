import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | paper data table pagination', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('noop', function() {});
  });

  test('it renders startOffset - endOffset of total', async function(assert) {
    this.setProperties({
      page: 1,
      limit: 10,
      total: null
    });

    await render(hbs`{{paper-data-table-pagination onChangeLimit=noop page=page limit=limit total=total}}`);

    // await pauseTest();
    assert.dom('.buttons > .label').doesNotExist('Hidden if no total given');

    this.set('total', 13);

    assert.dom('.buttons > .label').hasText('1 - 11 of 13');

    this.set('page', 2);

    assert.dom('.buttons > .label').hasText('11 - 13 of 13', 'endOffset is capped at total');
  });
});
