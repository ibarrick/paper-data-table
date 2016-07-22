import Ember from 'ember';
import layout from '../templates/components/paper-data-table-head';

export default Ember.Component.extend({
	layout,
	tagName: 'table',
	classNames: ['md-table','md-row-select'],
	attributeBindings: ['cellspacing','cellpadding'],
	cellpadding: "0",
	cellspacing: "0",
	headersWormhole: null,
	currentProp: null,
	didInitAttrs() {
		if (!this.get('stickyHeaders')) {
			this.set('tagName','');
			this.set('classNames',['md-head']);
		}
	},
	actions: {
		sortChanged(prop,dir) {
			this.get('setSortProp')(prop+':'+dir);
			this.set('currentProp',prop);
		}
	}
});
