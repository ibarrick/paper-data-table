import Ember from 'ember';
import layout from '../templates/components/paper-data-table-head';

let {
	K: noop
} = Ember;

export default Ember.Component.extend({
	layout,
	tagName: '',
	cellpadding: "0",
	cellspacing: "0",
	sortProp: null,
	sortDir: null,

	didReceiveAttrs() {
		this._super(...arguments);
		let { sortProp, sortDir } = this.getProperties('sortProp', 'sortDir');

		if (sortProp && sortDir) {
			this.send('sortChanged', sortProp, sortDir);
		}
	},
	actions: {
		sortChanged(prop, dir) {
			let action = this.get('setSortProp') || noop;
			action(`${prop}:${dir}`);
			this.set('sortProp', prop);
		}
	}
});
