import Ember from 'ember';
import layout from '../templates/components/paper-data-table-row';

const {
	computed,
	String: { htmlSafe }
 } = Ember;

export default Ember.Component.extend({
	layout,
	tagName: 'tr',
	classNames: ['md-row'],
	showEdit: false,
	attributeBindings: ['style'],
	style: computed('edit', 'onClick', function() {
		if (this.get('onClick') || this.get('edit')) {
			return htmlSafe('cursor: pointer;');
		}

		return htmlSafe("");
	}),
	click() {
		this.sendAction('onClick');
		if (this.get('edit')) {
			this.set('showEdit',true);
		}
	},
	actions: {
		toggleEdit() {
			this.toggleProperty('showEdit');
		}
	}
});
