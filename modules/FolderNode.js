'use strict'


exports.FolderNode  = class{
    id ; 
    url ;
    children ;
    /**
     * Calculated data
     * name 
     * lenght
     */

    constructor(url){
        this.url = url ;
    }
    getName(){
        // resolve name from url ;
    }
    getLenght(){
        // get count of items from sysFolder.
    }
}