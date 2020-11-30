import Marionette from 'backbone.marionette';
import UserView from './UserView';
import ApiRoutes from './api_routes'

// Gets people data and renders it
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
// { data: { people: [{ id: '', ....}, {....}]}}
// Returns people array to loop tr section in table

var UserItemCollection = Backbone.Collection.extend({
    url: ApiRoutes.get_people,
    model: UserItem,
    parse: function(response) {
    	return response.data.people
    }
});

var fullUsers = new UserItemCollection();

export default UsersChildView
