import layout from '../templates/components/paper-table-select';
import PaperSelect from 'ember-paper/components/paper-select';

export default PaperSelect.extend({
  layout,
  tagName: 'div',
  classNames: ['page-select']
});
