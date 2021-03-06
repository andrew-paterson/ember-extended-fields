import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/css-popout-toggler';

export default Component.extend({
  layout,
  tagName: 'span',
  classNames: ['toggle-button'],
  classNameBindings: ['classes', 'popoutBoxName:open:closed'],
  click() {
    this.toggleProperty('popoutBoxName');
  },
});