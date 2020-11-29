import Marionette from "backbone.marionette";
import template from "../templates/file_upload.jst";
import UsersView from "./UsersView";


var UploadView = Marionette.View.extend({
    template: template,
    regions: {
    	tableRegion: "#table_content"
    },
    onRender() {
    	this.showChildView("tableRegion", new UsersView());
    },
    events: {
    	"submit form": "uploadFile"
    },
    ui: {
    	"form": "form"
    },
    uploadFile(event) {
    	if(event){ event.preventDefault(); }
    	var payload = new FormData(this.ui.form[0]);
    	this.collection = uploadFile;
	    this.collection.fetch({ data: payload, type:'POST', processData: false, contentType: false });
    }
});

var FileUpload = Backbone.Model.extend({
	urlRoot: "http://localhost:3000/users/upload_data"
});

var FileUploadCollection = Backbone.Collection.extend({
    url: "http://localhost:3000/users/upload_data.json",
    model: FileUpload,
    parse: function(response) {
    	if (response.status) {
    		$("#success_alert").html(response.message);
    		$("#success_alert").show();
    		$("#collapseForm").removeClass("show");
    	} else {
    		$("#error_alert").html(response.message);
    		$("#error_alert").show();
    	}
    	
    	return response
    }
});

var uploadFile = new FileUploadCollection();

export default UploadView