const {
    ipcRenderer,
    
} = require('electron');


window.$ = window.jQuery = require('jquery');

const remote = require('electron').remote;
const {dialog} = require('electron').remote;

const fs = require('fs');
const path = require('path');
const {tagMenu} = require('./ui/menu.js') ;

const fileSys = require('./utilis/fileSystem.js') ;

//Database Connection
const tag = require('./persistence/tagCollection.js') ;
const dbFolder = require('./persistence/folderCollection.js') ;


const {Item} = require('./modules/Item'); 

const aside = document.getElementById('aside');
const asideContent = document.getElementById('asideContent') ;

const rootPath = path.join('D:' , 'Pictures' ) ;
const win = remote.getCurrentWindow();


const dirTree = require("directory-tree");


function addFolder(){
    dialog.showOpenDialog(win, {
        properties: ['openFile', 'openDirectory']
      }).then(result => {
        if( ! result.canceled){
            dbFolder.addFolder({url : result.filePaths[0]} , function(err , doc){
                const tree = dirTree(doc.url , { extensions: /\.brr/ });
                appendFolder(tree) ;
            }) ;
        }
      }).catch(err => {
        console.log(err)
      })
}


$(document).ready(function(){
    //
    $('#aside').load('./views/aside/aside.htm' , function (){
        // after doc is loaded
        dbFolder.getFolders(function(err , doc) {
            doc.forEach(f => {
                const tree = dirTree(f.url , { extensions: /\.brr/ });
                appendFolder(tree) ;
                console.log(tree) ;
            })
             
            //     initAside(tree) ;
        }) ;
    }) ;
    
})


function actNavNewFolder() {
    
    dialog.showOpenDialog({
        properties: ['openDirectory']
    }).then(
        function (success) {
            // success

            let folderPath = success.filePaths[0];
            let folderName = resolveDirName(folderPath);

            fs.readdir(folderPath, (error, files) => {

                let totalFiles = files.length; // return the number of files
                let uifolder = uiFolderNav(folderName, totalFiles, folderPath);
                console.log(uifolder);
                uiRender(uifolder, aside);
            });

            // uiFolderNav(success.filePaths , null , success.filePaths) ;
            // uiRender(ui)

        },
        function (error) {
            // error
            uiDebug('error selecting file !! sommething hase happend');
        }
    );
}

function uiShowExternalHTMLFile(url) {
    fs.readFile(url, function (err, suc) {
        if (err) {
            console.err(err);
        } else {
            document.getElementById('root').innerHTML = suc;
        }
    })
}

function toggleTagsMenu() {
       
    const t = document.getElementById('tagMenu');
    if (t) {
        t.remove();
    } else {
        tag.getAll(function(err ,data){
            if(err){
                console.log('enable to get data from Menu')
            }
            document.body.append(tagMenu('tag', data) );
        })
    }

}

function newTag(){
    console.log('atempting new tag') ;

    tag.insertTag({label : 'tag 101'} , function(err , doc) {
        console.log(`new Doc has inserted  : ${doc}`) ;
    })
}

function getAllTags(){
    tag.getAll(function(err , doc){
        console.log(doc) ;
    })
}

function toggleDeveloper(){
    console.log("toggling developer");
    ipcRenderer.send('toggle-developer' , "my message") ;
}

function getDirs(){
    return fileSys.getSystemDirs(rootPath)
}

function getFiles(){
    return fileSys.getSystemFiles(rootPath)
}

function testOfile(){
    // let o = new OFile('urlsome/thing/image.jpeg') ;
    // return o ; 
}
  

let uiList = document.getElementById('itemsList') ;


function showFiles( ){

    let files = getFiles() ;
    
    files.forEach(element => {
        appendFile(element);
    });
    
}

function appendFolder(){
    // let f = new Folder()
}

function appendFile(element){
    let i = new Item(element) ;
    let ui = i.getUi() ;
    uiList.appendChild(  ui ) ;

}

showFiles( )

// When document has loaded, initialise
document.onreadystatechange = (event) => {
    if (document.readyState == "complete") {
        handleWindowControls();
    }
};

window.onbeforeunload = (event) => {
    /* If window is reloaded, remove win event listeners
    (DOM element listeners get auto garbage collected but not
    Electron win listeners as the win is not dereferenced unless closed) */
    win.removeAllListeners();
}

function handleWindowControls() {
    // Make minimise/maximise/restore/close buttons work when they are clicked
    document.getElementById('min-button').addEventListener("click", event => {
        win.minimize();
    });

    document.getElementById('max-button').addEventListener("click", event => {
        win.maximize();
        toggleMaxRestoreButtons();
    });

    document.getElementById('restore-button').addEventListener("click", event => {
        win.restore();
        toggleMaxRestoreButtons();
    });

    document.getElementById('close-button').addEventListener("click", event => {
        win.close();
    });

    // Toggle maximise/restore buttons when maximisation/unmaximisation occurs
    console.log('win state : is maximized : ' + win.isMaximized() )
    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if (  win.isMinimized() ) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
}


// rooting 
let state = {
    nav : 'folder' ,
    tag : null ,
    folder : null ,
    bookmark : null ,
    file :null ,
    search : null 
}
var _folders = [{ label: 'folder 1' },
    { label: 'folder 2' },
    {
        label: 'folder 3',
        children: [
            { label: 'Sub-folder 1' },
            { label: 'Sub-folder 2' , children: [
            { label: 'Sub-folder 2 1' },
            { label: 'Sub-folder 2 2' }
        ] }
        ]
    },
    { label: 'folder 4' },
];



