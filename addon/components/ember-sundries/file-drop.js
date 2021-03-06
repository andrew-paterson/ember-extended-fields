import Component from '@ember/component';
import layout from '../../templates/components/ember-sundries/file-drop';

export default Component.extend({
  layout,
  classNames: ['draggable-dropzone'],
  classNameBindings: ['dragClass', 'disabled:disabled'],
  dragClass: 'deactivated',
  attributeBindings: ['dataTestClass:data-test-class'],
  dataTestClass: 'file-drop-zone',

  dragLeave: function(event) {
    event.preventDefault();
    return this.set('dragClass', 'deactivated');
  },

  dragOver: function(event) {
    event.preventDefault();
    return this.set('dragClass', 'activated');
  },

  drop: function(event) {
    event.preventDefault();
    var files;
    this.set('dragClass', 'deactivated');
    files = event.dataTransfer.files;
    if (this.get('disabled')) { 
      if (this.get('fileDroppedWhenDisabledAction')) {
        this.fileDroppedWhenDisabledAction();
      }
      return; 
    }
    this.fileProcessingAction(files, this.get('allowedFileTypesList'));
  },
});