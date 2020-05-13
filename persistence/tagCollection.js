const Datastore = require('nedb');
const electron = require('electron').remote ;
const path = require('path') ;

const dbPath = path.join(   electron.app.getPath("appData"), 'organizer' , 'nedb' ,  'tagsCollection' );

db = {} ;
db.tag = new Datastore(dbPath);

exports.insertTag = function (tag, callback) {
    db.tag.loadDatabase() ;

    db.tag.insert({
        label : tag.label
    }, function (err, doc) {
        callback(err, doc);
    });
}

exports.getTags = function (callback) {
    db.tag.loadDatabase() ;
    db.tag.find({} , function(err , doc) {
        callback(err , doc) ;
    })
}

