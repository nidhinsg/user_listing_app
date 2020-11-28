import Marionette from 'backbone.marionette';
import UserView from './UserView';

var UsersChildView = Marionette.CollectionView.extend({
  childView: UserView,
  tagName: 'tbody',
  initialize() {
    this.collection = fullUsers;
    this.collection.fetch();
    console.log("Collection: ");
    console.log(this.collection);
  }
});

var UserItem = Backbone.Model.extend({
	urlRoot: 'http://localhost:3000/users.json'
});

// API Response Format
// { users: [{ id: '', ....}, {....}]}

var UserItemCollection = Backbone.Collection.extend({
    url: 'http://localhost:3000/users.json',
    model: UserItem,
    parse: function(response) {
    	return response.users
    }
});

var fullUsers = new UserItemCollection();

export default UsersChildView