import Marionette from 'backbone.marionette';
import UserView from './UserView';

var UsersChildView = Marionette.CollectionView.extend({
  childView: UserView,
  tagName: 'tbody',
  initialize() {
    this.collection = fullUsers;
    this.collection.fetch();
    console.log(this.collection)
  }
});

var userData = [
  {
    id: 1,
    f_name: 'Test1F',
    l_name: 'Test1L',
    email: 'test1@test.com'
  },
  {
    id: 2,
    f_name: 'Test2F',
    l_name: 'Test2L',
    email: 'test2@test.com'
  }
];
    

var UserItem = Backbone.Model.extend({
	urlRoot: 'https://my-json-server.typicode.com/typicode/demo/posts'
});

var UserItemCollection = Backbone.Collection.extend({
    url: 'https://my-json-server.typicode.com/typicode/demo/posts',
    model: UserItem,
    parse: function(response) {
    	console.log(response);
    	return response
    }
});

var fullUsers = new UserItemCollection();

export default UsersChildView