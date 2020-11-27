import Marionette from 'backbone.marionette';
import template from '../templates/user.jst';


var UserView = Marionette.View.extend({
    template: template,
    tagName: 'tr'
});

export default UserView