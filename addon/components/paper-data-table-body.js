import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import layout from '../templates/components/paper-data-table-body';

export default Component.extend({
	classNames: ['md-body'],
	attributeBindings: ['style'],
	layout,
	tagName: 'tbody',
	style: htmlSafe('position: relative;'),
	cellspacing: '0',
	cellpadding: '0',
});
