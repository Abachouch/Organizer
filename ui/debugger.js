exports.uiDebug = function(titre , message) {

    let wraper = utilCreateElement('DIV' , {className : "debug"} , [
        utilCreateElement('H1' , {className : "debug__title" , txt : titre }),
        utilCreateElement('P' , {className : "debug__message" , txt : message})
    ]) ;

    return wraper;
}

