import Ember from 'ember';
import layout from '../templates/components/paper-data-table-cell';

export default Ember.Component.extend({
	layout,
	tagName: 'td',
	classNameBindings: ['numeric:md-numeric','edit:md-clickable'],
	classNames: ['md-cell'],
	edit: false,
	showEdit: false,
	click() {
		if (this.get('edit')) {
			this.set('showEdit',true);
		}
	}
});
