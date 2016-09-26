import Ember from 'ember';
import layout from '../templates/components/paper-data-table-dialog-inner';

const { Handlebars } = Ember;

export default Ember.Component.extend({
	layout,
	tagName: 'md-edit-dialog',
	attributeBindings: ['style'],
	width: null,
	transitionClass: 'ng',
	classNames: ['md-whiteframe-1dp'],
	style: Ember.computed('left','top','width',function() {
		let left = Handlebars.Utils.escapeExpression(this.get('left'));
		let top = Handlebars.Utils.escapeExpression(this.get('top'));
		let width = Handlebars.Utils.escapeExpression(this.get('width'));
		return Ember.String.htmlSafe(`left: ${left}px;top: ${top}px; min-width: ${width}px;`);
	}),
	positionDialog() {
		let size = { width: this.get('element').clientWidth, height: this.get('element').clientHeight };
		let cellBounds = Ember.$('#'+this.get('parent'))[0].getBoundingClientRect();
		let tableBounds = this.$().closest('md-table-container')[0].getBoundingClientRect();

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
		this.positionDialog();
		Ember.$(window).on('resize',this.positionDialog.bind(this));
		Ember.run.scheduleOnce('afterRender',this,function() { this.$('input').first().focus(); });
	},
	willDestroyElement() {
		Ember.$(window).off('resize',this.positionDialog.bind(this));
	}
});
