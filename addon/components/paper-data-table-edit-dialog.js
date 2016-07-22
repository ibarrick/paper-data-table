import Ember from 'ember';
import layout from '../templates/components/paper-data-table-edit-dialog';

export default Ember.Component.extend({
	layout,
  	tagName: '',
	actions: {
		outsideClicked() {
			this.get('onClose')();
		}
	}
});
