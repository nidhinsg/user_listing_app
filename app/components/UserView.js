import Marionette from 'backbone.marionette';
import template from '../templates/user.jst';


var UserView = Marionette.View.extend({
    template: template,
    tagName: 'tr',
    events: {
    	"click .update_user_details": "updateUser"
    },
    ui: {
    	"f_name": "#f_name",
    	"l_name": "#l_name",
    	"email": "#email",
    	"phone": "#phone"
    },
    updateUser(e) {
    	var button_id = e.target.id
    	var user_id = button_id.split("_")[2]
    	var f_name = this.ui.f_name.val();
    	var l_name = this.ui.l_name.val();
    	var email = this.ui.email.val();
    	var phone = this.ui.phone.val();
    	var data = { 'first_name': f_name, 'last_name': l_name, 'email': email, 'phone': phone, 'id': user_id }
    	var updateUser = new UserUploadCollection();
    	console.log('====', updateUser);
    	this.collection = updateUser;
	    this.collection.fetch({
            url: "http://localhost:3000/users/" + user_id + ".json",
            type: "put",
            contentType: "application/json",
            data: JSON.stringify({'user': data}),
        });
    }
});

var User = Backbone.Model.extend();

var UserUploadCollection = Backbone.Collection.extend({
    model: User,
    parse: function(response) {
    	if (response.status) {
    		$("#success_alert").html(response.message);
    		$("#success_alert").show();
    	} else {
    		$("#error_alert").html(response.message);
    		$("#error_alert").show();
    	}
    	return response
    }
});

var updateUser = new UserUploadCollection();

export default UserView