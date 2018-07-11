import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | paper data table', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function() {
    this.set('noop', function() {});
  });

  test('it can toggle sort state', async function(assert) {
    this.setProperties({
      sortDir: 'desc',
      sortProp: 'property_b'
    });

    await render(hbs`
      {{#paper-data-table sortProp=sortProp sortDir=sortDir as |table|}}
        {{#table.head as |head|}}
          {{#head.column}}Col A{{/head.column}}
          {{#head.column sortProp="property_b"}}Col B{{/head.column}}
        {{/table.head}}
        {{#table.body as |body|}}
          {{#body.row as |row|}}

          {{#row.cell}}
            Row 1 - Col A
          {{/row.cell}}

          {{#row.cell}}
            Row 1 - Col B
          {{/row.cell}}

          {{/body.row}}
        {{/table.body}}
      {{/paper-data-table}}
    `);

    assert.dom('.md-column:not(.md-checkbox-column)').hasNoClass('md-sort', 'First column is not sortable');
    assert.dom(findAll('.md-column:not(.md-checkbox-column)')[1]).hasClass('md-sort', 'Second column is sortable');

    assert.dom('.md-column.md-sort').hasClass('md-active', 'Second column sort is active');
    assert.dom('.md-column.md-sort .md-sort-icon.md-desc').exists('Current sort is desc');
  });

  test('it can use custom sort action', async function(assert) {
    assert.expect(6);

    this.setProperties({
      sortDir: 'asc',
      sortProp: 'property_b'
    });

    this.set('onChangeSort', function({ sortProp, sortDir }) {
      assert.equal(sortProp, 'property_b', 'Check sortProp');
      assert.equal(sortDir, 'desc', 'Check sortDir');
      this.setProperties({ sortProp, sortDir });
    }.bind(this));

    await render(hbs`
      {{#paper-data-table onChangeSort=onChangeSort sortProp=sortProp sortDir=sortDir as |table|}}
        {{#table.head as |head|}}
          {{#head.column}}Col A{{/head.column}}
          {{#head.column sortProp="property_b"}}Col B{{/head.column}}
        {{/table.head}}
        {{#table.body as |body|}}
          {{#body.row as |row|}}

          {{#row.cell}}
            Row 1 - Col A
          {{/row.cell}}

          {{#row.cell}}
            Row 1 - Col B
          {{/row.cell}}

          {{/body.row}}
        {{/table.body}}
      {{/paper-data-table}}
    `);

    assert.dom(findAll('.md-column:not(.md-checkbox-column)')[1]).hasClass('md-active', 'Second column sort is active');
    assert.dom('.md-column.md-active .md-sort-icon.md-asc').exists('Current sort is asc');

    await click(findAll('.md-column:not(.md-checkbox-column)')[1]);

    assert.dom(findAll('.md-column:not(.md-checkbox-column)')[1]).hasClass('md-active', 'Second column sort is active');
    assert.dom('.md-column.md-active .md-sort-icon.md-desc').exists('Current sort is desc');
  });
});
