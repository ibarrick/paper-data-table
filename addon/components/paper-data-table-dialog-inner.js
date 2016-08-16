import Ember from 'ember';
import layout from '../templates/components/paper-data-table-dialog-inner';

export default Ember.Component.extend({
	layout,
	tagName: 'md-edit-dialog',
	attributeBindings: ['style'],
	transitionClass: 'ng',
	classNames: ['md-whiteframe-1dp'],
	style: Ember.computed('left','top',function() {
		return "left: " + this.get('left') + "px;top: " + this.get('top') + "px";
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

		this.$().css('minWidth', cellBounds.width + 'px');
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
