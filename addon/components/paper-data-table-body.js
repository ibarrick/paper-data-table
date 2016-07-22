import Ember from 'ember';
import layout from '../templates/components/paper-data-table-body';

export default Ember.Component.extend({
	layout,
  	tagName: 'table',
	classNames: ['md-table','md-row-select'],
	attributeBindings: ['cellpadding','cellspacing','style'],
	classNameBindings: ['virtual:virtual-table'],
	cellspacing: "0",
	cellpadding: "0",
	didInsertElement() {
		if (this.get('setHeadersWormhole')) {
			this.get('setHeadersWormhole')(this.element ? this.element.firstElementChild : null);
		//	console.log(this.element.firstElementChild.clientWidth);
		//	this.get('setRowWidth')(this.this.element.firstElementChild.clientWidth);
		}
	},
	didInitAttrs() {
		if (!this.get('stickyHeaders')) {
			this.set('tagName','');
			this.set('classNameBindings',[]);
			this.set('classNames',['md-body']);
		}
	}
});
