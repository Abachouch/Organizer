exports.contentSection = {

    init() {
        // show Content OF foldr After clicking on Nav
        // TODO switch between tag | folder | tag clicked
        showContentInFolder();
    },

}
// const fs = require('fs') ;

// exports.getSystemDirs = function(url) {
//     let data = fs.readdirSync(url)
//     .map(file => path.join(url, file))
//     .filter(path => fs.statSync(path).isDirectory());

//     return data ;
// }

// exports.getSystemFiles =function(url){
//     let data = fs.readdirSync(url)
//     .map(file => path.join(url, file))
//     .filter(path => !(fs.statSync(path).isDirectory()));

//     return data;
// }

// function resolveDirName(str) {
//     return str.split('\\').pop();
// }