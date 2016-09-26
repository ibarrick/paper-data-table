import Ember from 'ember';
import layout from '../templates/components/paper-data-table-cell';

const { computed, Handlebars } = Ember;

export default Ember.Component.extend({
	layout,
	tagName: 'td',
	classNameBindings: ['numeric:md-numeric','edit:md-clickable'],
	attributeBindings: ['style'],
	classNames: ['md-cell'],
	edit: false,
	showEdit: false,
	width: null,
	style: computed('width', function() {
		let width = Handlebars.Utils.escapeExpression(this.get('width'));
		if (width) {
			return Ember.String.htmlSafe(`width: ${width}px;`);
		} else {
			return undefined;
		}
	}),
	click() {
		this.sendAction('onClick');
		this.set('showEdit',true);
	},
	actions: {
		close() {
			//this.set('showEdit',false);
			this.sendAction('onClose',this);
		}
	}
});
