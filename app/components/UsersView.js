import Marionette from 'backbone.marionette';
import template from '../templates/user_table.jst';
import UserChildView from './UsersChildView'


var UsersView = Marionette.View.extend({
  template: template,
  tagName: 'table',
  className: 'table table-hover',
  regions: {
    body: {
      el: 'tbody',
      replaceElement: true
    }
  },
  onRender() {
    this.showChildView('body', new UserChildView());
  }
});

export default UsersView
