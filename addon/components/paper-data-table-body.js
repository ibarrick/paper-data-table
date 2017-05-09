import Ember from 'ember';
import layout from '../templates/components/paper-data-table-body';

const {
	Component,
	String: { htmlSafe },
} = Ember;

export default Component.extend({
	classNames: ['md-body'],
	attributeBindings: ['style'],
	layout,
	tagName: 'tbody',
	style: htmlSafe('position: relative;'),
	cellspacing: '0',
	cellpadding: '0',
});
