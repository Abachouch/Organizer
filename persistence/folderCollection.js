const Datastore = require('nedb');
const electron = require('electron').remote ;
const path = require('path') ;

dbfolder = {} ;
dbfolder = new Datastore(path.join(   electron.app.getPath("appData"),  'organizer' , 'nedb' ,  'folderCollection' ) ) ;

exports.addFolder = function(dir , calback){
    console.log(dir) ;
    dbfolder.loadDatabase() ;
    dbfolder.insert( dir , function(err ,doc){
        calback(err ,doc) ;
    })
}


exports.getFolders = function(calback){

    dbfolder.loadDatabase() ;
    dbfolder.find( {} , function(err , doc) {
        console.log(doc) ;
        calback(err ,doc) ;
    })
}

