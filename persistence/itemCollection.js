const Datastore = require('nedb');
const electron = require('electron').remote ;
const path = require('path') ;

db = {} ;
db.item = new Datastore(path.join(   electron.app.getPath("appData"),  'organizer' , 'nedb' ,  'itemsCollection' ) ) ;


exports.dbInsertItem = function(f , callback) {
    db.item.loadDatabase() ;
    db.item.insert(f, function(err , doc){
        callback(err , doc) ;
    })
}

exports.dbGetAll = function(callback){
    db.item.loadDatabase() ;
    db.item.find({} , function(err , doc){
        callback(err , doc) 
    })
}

exports.dbFindeById = function(id , callback){
    db.item.loadDatabase() ;
    db.item.find({_id : id} , function(err , doc){
        callback(err , doc)
    })
}

exports.dbFindeByUrl = function(name , callback){
    db.item.loadDatabase() ;
    db.item.find( {name : name} , function(err ,doc){
        callback(err , doc)
    })
}

exports.dbFindeById = function(fileObject , callback){
    db.item.loadDatabase() ; 
    db.item.find(fileObject , function(err , doc) {
        callback(err , doc)
    })
}