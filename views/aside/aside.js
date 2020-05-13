
function showAsideFoldersSection(){
    $('#asideContent').load('./views/aside/folders/folders.htm' , function (){
        // after document is loaded
        dbFolder.getFolders(function(err , doc) {

            doc.forEach(f => {
                const tree = dirTree(f.url , { extensions: /\.brr/ });
                appendFolder(tree) ;
            })
            
        }) ;
    }) ;
}

function showAsideTagsFoldersSection(){
    $('#asideContent').load('./views/aside/tags/tags.htm' , function (){
        // after document is loaded
        dbTag.getTags(function(err , doc) {

            doc.forEach(f => {
                appendTag(f) ;
            })
             
        }) ;
    }) ;
}




