import Component from '@ember/component';
import layout from '../templates/components/paper-data-table-edit-dialog';

export default Component.extend({
	layout,
	tagName: '',
	actions: {
		outsideClicked() {
			this.get('onClose')();
		}
	}
});
