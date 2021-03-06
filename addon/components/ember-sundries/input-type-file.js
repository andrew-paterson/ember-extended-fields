import { isEmpty } from '@ember/utils';
import layout from '../../templates/components/ember-sundries/input-type-file';
import jQuery from 'jquery';
import TextField from '@ember/component/text-field';

export default TextField.extend({
  layout,
  type: 'file',

  change: function(e) {
    var input = e.target;
    if (!isEmpty(input.files)) {
      this.send('sendFiles', input.files);
      jQuery(".file-select-button")[0].reset();
    }
  },

  actions: {
    sendFiles: function(files) {
      this.sendFiles(files);
    },
  }
});