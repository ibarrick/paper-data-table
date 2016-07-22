import Ember from 'ember';
import layout from '../templates/components/paper-data-table';

export default Ember.Component.extend({
	layout,
	tagName: 'md-table-container',
	classNameBindings: ['noPadding:no-padding-table'],
	rowWidth: 0,
	sortProp: "",
	stickyHeaders: true,
	selectable: false
});
