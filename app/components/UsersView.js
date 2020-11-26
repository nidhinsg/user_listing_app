import Marionette from 'backbone.marionette';
import template from '../templates/user_table.jst';
import UserView from './UserView'

var UsersView = Marionette.View.extend({
  template: template,

  regions: {
    tableRegion: '#user_listing_table'
  },
  onRender() {
    this.showChildView('tableRegion', new UserView());
  }
});

export default UsersView
