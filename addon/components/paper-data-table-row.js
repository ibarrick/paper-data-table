import Ember from 'ember';
import layout from '../templates/components/paper-data-table-row';

const {
	Component,
	String: { htmlSafe },
	computed
 } = Ember;

export default Component.extend({
	layout,
	tagName: 'tr',
	classNames: ['md-row'],
	showEdit: false,
	attributeBindings: ['style', 'disabled'],
	style: computed('edit', 'onClick', function() {
		if (this.get('onClick') || this.get('edit')) {
			return htmlSafe('cursor: pointer;');
		}
		return htmlSafe('');
	}),

	click() {
		this.sendAction('onClick');
		if (this.get('edit')) {
			this.set('showEdit',true);
		}
	},

	actions: {
		close() {
			this.sendAction('onClose', this);
		},
		toggleEdit() {
			this.toggleProperty('showEdit');
		}
	}
});
