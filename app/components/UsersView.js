import Marionette from 'backbone.marionette';
import template from '../templates/user_table.jst';
import UserChildView from './UsersChildView'


var UsersView = Marionette.View.extend({
  template: template,
  regions: {
    tableRegion: '#user_listing_table'
  },
  onRender() {
    this.showChildView('tableRegion', new UserChildView());
  }
});

export default UsersView
