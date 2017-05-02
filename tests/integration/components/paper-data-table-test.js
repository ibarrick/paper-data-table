import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-data-table', 'Integration | Component | paper data table', {
  integration: true,
  beforeEach() {
    this.set('noop', function() {});
  }
});

test('it can toggle sort state', function(assert) {
  this.setProperties({
    sortDir: 'desc',
    sortProp: 'property_b'
  });

  this.render(hbs`
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

  assert.notOk(this.$('.md-column:not(.md-checkbox-column):nth(0)').hasClass('md-sort'), 'First column is not sortable');
  assert.ok(this.$('.md-column:not(.md-checkbox-column):nth(1)').hasClass('md-sort'), 'Second column is sortable');

  assert.ok(this.$('.md-column:not(.md-checkbox-column):nth(1)').hasClass('md-active'), 'Second column sort is active');
  assert.ok(this.$('.md-column:not(.md-checkbox-column):nth(1) .md-sort-icon.md-desc').length === 1, 'Current sort is desc');
});

test('it can use custom sort action', function(assert) {
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

  this.render(hbs`
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

  assert.ok(this.$('.md-column:not(.md-checkbox-column):nth(1)').hasClass('md-active'), 'Second column sort is active');
  assert.ok(this.$('.md-column:not(.md-checkbox-column):nth(1) .md-sort-icon.md-asc').length === 1, 'Current sort is asc');

  this.$('.md-column:not(.md-checkbox-column):nth(1)').click();

  assert.ok(this.$('.md-column:not(.md-checkbox-column):nth(1)').hasClass('md-active'), 'Second column sort is active');
  assert.ok(this.$('.md-column:not(.md-checkbox-column):nth(1) .md-sort-icon.md-desc').length === 1, 'Current sort is desc');
});
