import Ember from 'ember';
import layout from '../templates/components/paper-data-table';

export default Ember.Component.extend({
	layout,
	tagName: 'md-table-container',
	classNameBindings: ['noPadding:no-padding-table'],
	rowWidth: 0,
	sortProp: "",
	selectable: false,

	bodyComponent: 'paper-data-table-body',
	bodyRowComponent: 'paper-data-table-row',
	headComponent: 'paper-data-table-head'

});
