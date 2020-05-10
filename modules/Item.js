'use strict'
const CItem = require('../persistence/itemCollection') ;
const path = require('path') ;
const {itemView} = require('../ui/itemView') ;


exports.Item = class{
    _id ;
    _url ;
    _isFavorit = false ;
    constructor(url){
         this._url = url;
         this._ext = this.resolveExtenssion(url) ;
         this._name = this.resolveName(url);
    };
//setters
    setId = function(id){ this._id = id} ;
    setUrl = function(id){ this._url = this.url} ;
    setFav = function(isFavorit){  this._isFavorit = isFavorit } ;
//getters
    getId = function(){return this._id} ;
    getUrl = function(){return this._url} ;

//Methodes
    resolveName  =function(){
        return this._url.split('\\').pop().split('/').pop();
    };
    resolveExtenssion = function(){
        return this._url.split('.').pop();
    };
//persistence
    save =function(){
           let o =  {
                url : this._url ,
                isFav : this._isFavorit ,
                name : this.resolveName() ,
                ext : this.resolveExtenssion() ,
            }
    }
    getUi = function(){
       return  itemView(this);
       
    }

}
