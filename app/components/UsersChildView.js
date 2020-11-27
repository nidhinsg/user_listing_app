import Marionette from 'backbone.marionette';
import UserView from './UserView';

var UsersChildView = Marionette.CollectionView.extend({
  childView: UserView,
  tagName: 'tr',
  initialize() {
    this.collection = new UserItemCollection(userData);
    console.log(this.collection.models[0].attributes.id);
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
  },
  {
    id: 3,
    f_name: 'Test3F',
    l_name: 'Test3L',
    email: 'test3@test.com'
  }
];
    

var UserItem = Backbone.Model.extend({});

var UserItemCollection = Backbone.Collection.extend({
    model: UserItem
});

export default UsersChildView