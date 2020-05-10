const {utilCreateElement} = require('../utilis/utils.js') ;

exports.itemView = function(item){

    if( ['jpeg' , 'png' , 'gif', 'svg' ,'jpg' , 'webp' , 'tiff' , 'raw' , 'bmp' , 'heif' , 'indd' ].includes( item._ext )   ){
        return utilCreateElement('IMG', {src : item._url , className : 'item--img ' } , false) ;
    }
    if( ['pdf' ].includes( item._ext )   ){
        return utilCreateElement('object', {data : item._url , type : 'application/pdf' ,  className : 'item--img ' } , false) ;
    }
    if( ['ini' ].includes( item._ext )   ){
        return utilCreateElement('p', {txt : item._url , className : 'item--img ' } , false) ;
    }

    if( ['zip' ].includes( item._ext )   ){
        return utilCreateElement('p', {txt : "Zip File" , className : 'item--img zip' } , false) ;
    }
}