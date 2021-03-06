import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/file-select';

export default Component.extend({
  layout,
  type: 'div',
  classNames: ['input-file-wrapper'],
  classNameBindings: ['disabled:disabled'],
  attributeBindings: ['dataTestClass:data-test-class'],
  dataTestClass: "file-select-button",

  actions: {
    sendFiles: function(files) {
      this.fileProcessingAction(files, this.get('allowedFileTypesList'));
    },
  }
});