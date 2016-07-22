import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('paper-data-table-edit-dialog', 'Integration | Component | paper data table edit dialog', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{paper-data-table-edit-dialog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#paper-data-table-edit-dialog}}
      template block text
    {{/paper-data-table-edit-dialog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
