import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/paper-data-table-pagination';

export default Component.extend({
	layout,
	tagName: 'md-table-pagination',
	classNames: ['md-table-pagination'],
	startOffset: computed('page', 'limit', function() {
		return Math.max((this.get('page') - 1) * this.get('limit') + 1, 1); // 1-based index
	}),
	endOffset: computed('startOffset', 'limit', 'total', function() {
		let endOffset = this.get('startOffset') + this.get('limit');
		let total = this.get('total');
		return total ? Math.min(endOffset, total) : endOffset;
	})
});
