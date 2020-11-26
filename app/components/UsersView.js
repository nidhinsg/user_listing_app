import Marionette from 'backbone.marionette';
import template from '../templates/user_table.jst';

var UsersView = Marionette.View.extend({
  template: template
});

export default UsersView
