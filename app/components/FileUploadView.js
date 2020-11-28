import Marionette from 'backbone.marionette';
import template from '../templates/file_upload.jst';
import UsersView from './UsersView';


var UploadView = Marionette.View.extend({
    template: template,
    regions: {
    	tableRegion: '#table_content'
    },
    onRender() {
    	this.showChildView('tableRegion', new UsersView());
    }
});

export default UploadView