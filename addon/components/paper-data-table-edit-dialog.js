import Ember from 'ember';
import layout from '../templates/components/paper-data-table-edit-dialog';

const { Component } = Ember;

export default Component.extend({
	layout,
	tagName: '',
	actions: {
		outsideClicked() {
			this.get('onClose')();
		}
	}
});
