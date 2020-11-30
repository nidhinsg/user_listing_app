import Marionette from 'backbone.marionette';
import UserView from './UserView';
import ApiRoutes from './api_routes'

var UsersChildView = Marionette.CollectionView.extend({
  childView: UserView,
  tagName: 'tbody',
  initialize() {
    this.collection = fullUsers;
    this.collection.fetch();
  }
});

var UserItem = Backbone.Model.extend();

// API Response Format
// { users: [{ id: '', ....}, {....}]}

var UserItemCollection = Backbone.Collection.extend({
    url: ApiRoutes.get_people,
    model: UserItem,
    parse: function(response) {
    	return response.data.people
    }
});

var fullUsers = new UserItemCollection();

export default UsersChildView
