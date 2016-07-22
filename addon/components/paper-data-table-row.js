import Ember from 'ember';
import layout from '../templates/components/paper-data-table-row';

export default Ember.Component.extend({
	layout,
	tagName: 'tr',
	classNames: ['md-row']
});
