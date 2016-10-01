import Ember from 'ember';
import layout from '../templates/components/paper-data-table-head';

export default Ember.Component.extend({
	layout,
	tagName: '',
	cellpadding: "0",
	cellspacing: "0",
	currentProp: null,
	actions: {
		sortChanged(prop,dir) {
			this.get('setSortProp')(prop+':'+dir);
			this.set('currentProp',prop);
		}
	}
});
