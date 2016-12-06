import Ember from 'ember';
import layout from '../templates/components/paper-data-table-dialog-inner';

const {
	Component,
	Handlebars: { Utils: { escapeExpression } },
	String: { htmlSafe },
	computed,
	run,
	$
 } = Ember;

export default Component.extend({
	layout,
	tagName: 'md-edit-dialog',
	attributeBindings: ['style'],
	width: null,
	transitionClass: 'ng',
	classNames: ['md-whiteframe-1dp'],
	style: computed('left','top','width',function() {
		let left = escapeExpression(this.get('left'));
		let top = escapeExpression(this.get('top'));
		let width = escapeExpression(this.get('width'));
		return htmlSafe(`left: ${left}px;top: ${top}px; min-width: ${width}px;`);
	}),

	positionDialog() {
		let element = this.get('element') || { clientWidth: 0, clientHeight: 0};
		let size = { width: element.clientWidth, height: element.clientHeight };
		let cellBounds = $(`#${this.get('parent')}`)[0].getBoundingClientRect();
		let tableBounds = this._mdTableContainer.getBoundingClientRect();

		if (size.width > tableBounds.right - cellBounds.left) {
			this.set('left',tableBounds.right - size.width);
		} else {
			this.set('left',cellBounds.left);
		}

		if (size.height > tableBounds.bottom - cellBounds.top) {
			this.set('top',tableBounds.bottom - size.height);
		} else {
			this.set('top',cellBounds.top + 1);
		}
		this.set('width',(this.get('row') ? tableBounds.width : cellBounds.width));
	},

	didInsertElement() {
		this._super(...arguments);

		this._mdTableContainer = this.$().closest('md-table-container')[0];
		$(window).on('resize', this.positionDialog.bind(this));
		run.scheduleOnce('afterRender', this, function() {
			this.positionDialog();
			this.$('input').first().focus();
		});
	},

	willDestroyElement() {
		this._super(...arguments);
		$(window).off('resize', this.positionDialog.bind(this));
	}
});
