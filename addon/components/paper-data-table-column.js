import Ember from 'ember';
import layout from '../templates/components/paper-data-table-column';

export default Ember.Component.extend({
	layout,
	tagName: 'th',
	classNameBindings: ['numeric:md-numeric','active:md-active','sortProp:md-sort'],
	classNames: ['md-column'],
	active: false,
	currentProp: null,
	sortProp: null,
	sortDir: null,
	click() {
		if (this.get('sortProp')) {
			if (!this.get('active')) {
				this.toggleProperty('active');
				this.set('sortDir','asc');
			} else if (this.get('active') && this.get('sortDir') === 'asc') {
				this.set('sortDir','desc');
			} else if (this.get('active') && this.get('sortDir') === 'desc') {
				this.set('sortDir','asc')
			}
			this.get('sortChanged')(this.get('sortProp'),this.get('sortDir'));
		}
	},
	didUpdateAttrs() {
		if (this.get('currentProp') !== this.get('sortProp')) {
			this.set('active',false);
		}
	}
});
