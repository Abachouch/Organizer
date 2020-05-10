
const folderDb = require('../persistence/folderCollection') ;

exports.Folder ={

    id  ,
    url ,
    children ,
    label,
    
    constructor(url){
        this.url = url ;
        this.label = this.resolveName(url) ;
    },

//setters
    setId(id){ this.id = id},
    setUrl(id){ this.url = this.url},
    setFiles(files){ this.files = files},
    setThumb(thumb){ this.thumb = thumb },

//getters
    getId(){return this.id},
    getUrl(){return this.url},
    getFiles(){return this.files},
    getThumb(){return this.thumb},
    getName(){ 
        if(this.url)
            this.url.split('\\').pop()
    },

//functions
    addChild(child){
        if(!this.children) this.children = new Array() ;
        this.children.push(file) ;
    },

    resolveName  =function(){
        return this._url.split('\\').pop().split('/').pop();
    } ,
    save(callback){
        let folder = { label : this.label } ; 
        if(this.children) folder.children = this.children ;
        folderDb.addFolder(folder , function(err , doc){ callback(err , doc)  }) ;
    },
    getAll()

}