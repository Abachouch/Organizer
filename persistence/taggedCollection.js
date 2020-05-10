const Datastore = require('nedb');
const electron = require('electron').remote ;
const path = require('path') ;

db = {} ;
db.tagged = new Datastore(path.join(   electron.app.getPath("appData"),  'organizer' , 'nedb' ,  'taggedCollection' ) ) ;
//
exports.tagFile = function(labelTag , idFile , callback){
    db.tagged.loadDatabase() ;
    db.tagged.insert({label: labelTag , idFile} , function(err , doc ){  
        callback(err , doc) ;
    })
}
