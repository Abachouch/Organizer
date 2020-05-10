const Datastore = require('nedb');
const electron = require('electron').remote ;
const path = require('path') ;

db = {} ;
db.folder = new Datastore(path.join(   electron.app.getPath("appData"),  'organizer' , 'nedb' ,  'folderCollection' ) ) ;

exports.addFolder = function(dir , calback){
    db.folder.loadDatabase() ;
    db.folder.insert( dir , function(err ,doc){
        calback(err ,doc) ;
    })
}


exports.getFolders = function(calback){

    db.folder.loadDatabase() ;
    db.folder.find( {} , function(err , doc) {
        calback(err ,doc) ;
    })
}

