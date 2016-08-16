import Ember from 'ember';
import layout from '../templates/components/paper-data-table-row';

export default Ember.Component.extend({
	layout,
	tagName: 'tr',
	classNames: ['md-row'],
	showEdit: false,
	click() {
		this.sendAction('onClick');
		if (this.get('edit')) {
			this.set('showEdit',true);
		}
	}
});
