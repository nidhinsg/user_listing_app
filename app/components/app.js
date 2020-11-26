import Marionette from 'backbone.marionette';
import ItemView from './UsersView';

export default Marionette.Application.extend({
  region: '#app',

  onStart() {
    this.showView(new ItemView());
  }
});
