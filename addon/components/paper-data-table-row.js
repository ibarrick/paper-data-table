import Ember from 'ember';
import layout from '../templates/components/paper-data-table-row';

const { computed, Handlebars } = Ember;

export default Ember.Component.extend({
	layout,
	tagName: 'tr',
	classNames: ['md-row'],
	showEdit: false,
	attributeBindings: ['style'],
	style: computed('edit', 'onClick', function() {
		if (this.get('onClick') || this.get('edit')) {
			return Ember.String.htmlSafe("cursor: pointer;");
		} else {
			return Ember.String.htmlSafe("");
		}
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
