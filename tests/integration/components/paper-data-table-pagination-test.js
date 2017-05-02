import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-data-table-pagination', 'Integration | Component | paper data table pagination', {
  integration: true,
  beforeEach() {
    this.set('noop', function() {});
  }
});

test('it renders startOffset - endOffset of total', function(assert) {
  this.setProperties({
    page: 1,
    limit: 10,
    total: null
  });

  this.render(hbs`{{paper-data-table-pagination onChangeLimit=noop page=page limit=limit total=total}}`);

  assert.equal(this.$('.buttons > .label').text().trim(), '', 'Hidden if no total given');

  this.set('total', 13);

  assert.equal(this.$('.buttons > .label').text().trim(), '1 - 11 of 13');

  this.set('page', 2);

  assert.equal(this.$('.buttons > .label').text().trim(), '11 - 13 of 13', 'endOffset is capped at total');
});
