import Ember from 'ember';
import layout from '../templates/components/paper-data-table-cell';

const {
	Component,
	Handlebars: { Utils: { escapeExpression } },
  String: { htmlSafe },
	computed
} = Ember;

export default Component.extend({
	layout,
	tagName: 'td',
	classNameBindings: ['numeric:md-numeric','edit:md-clickable'],
	attributeBindings: ['style','colspan'],
	classNames: ['md-cell'],
	edit: false,
	showEdit: false,
	width: null,
	style: computed('width', function() {
		let width = escapeExpression(this.get('width'));
		if (width) {
			return htmlSafe(`width: ${width}px;`);
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
			this.sendAction('onClose',this);
		},
		toggleEdit() {
			this.toggleProperty('showEdit');
		}
	}
});
