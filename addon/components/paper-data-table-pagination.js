import Ember from 'ember';
import layout from '../templates/components/paper-data-table-pagination';

export default Ember.Component.extend({
	layout,
	tagName: 'md-table-pagination',
	classNames: ['md-table-pagination']
});
