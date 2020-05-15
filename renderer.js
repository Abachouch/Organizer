//electron
const {
    ipcRenderer
} = require('electron');
const remote = require('electron').remote;
const {
    dialog
} = require('electron').remote;
const win = remote.getCurrentWindow();

//Libraries
const dirTree = require("directory-tree");

//jquery
window.$ = window.jQuery = require('jquery');

//node
const fs = require('fs');
const path = require('path');


//utilities
const ui = require('./utilis/utils.js');

//Database Connection
const dbTag = require('./persistence/tagCollection.js');
const dbFolder = require('./persistence/folderCollection.js');

//HTML Element Selectors
const aside = document.getElementById('aside');
const asideContent = document.getElementById('asideContent');

// Views Object
const {
    contentSection
} = require('./views/content/content.js');

const {
    asideSection
} = require('./views/aside/aside.js');

const {
    contentFolder
} = require('./views/content/folder/contentFolder.js');


// function addFolder() {
//     dialog.showOpenDialog(win, {
//         properties: ['openFile', 'openDirectory']
//     }).then(result => {
//         if (!result.canceled) {
//             dbFolder.addFolder({
//                 url: result.filePaths[0]
//             }, function (err, doc) {
//                 const tree = dirTree(doc.url, {
//                     extensions: /\.brr/
//                 });
//                 appendFolder(tree);
//             });
//         }
//     }).catch(err => {
//         console.log(err)
//     })
// }


$(document).ready(function () {
    //
    $('#aside').load('./views/aside/aside.htm', function () {
        // after doc is loaded
        dbFolder.getFolders(function (err, doc) {
            asideSection.showAsideFoldersSection();
            //showAsideTagsSection();
        });
    });

})


function toggleDeveloper() {
    console.log("toggling developer");
    ipcRenderer.send('toggle-developer', "my message");
}





// When document has loaded, initialise
document.onreadystatechange = (event) => {
    if (document.readyState == "complete") {

    }
};




// rooting 
var appState = {
    nav: 'folder',
    tag: null,
    folder: null,
    pathHistory: null,
    bookmark: null,
    file: null,
    search: null
}