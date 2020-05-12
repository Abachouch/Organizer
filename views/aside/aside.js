let asideList = document.getElementById('asideList');

let icons = {
    folder: "assets/icon-folder.png",
    tag: "assets/icon-folder.png",
    bookmark: "assets/icon-folder.png",
    favorit: "assets/icon-folder.png"
};


//

function renderFolders(list) {
    if(list.lenght > 0)
    list.forEach(el => {
        asideList.appendChild(Li(el));
    })
    else {
        asideList.innerHTML =" list vide " ;
    }
}

function appendFolder(folder){
    asideList.appendChild(Li(folder));
}

/**
ul
    li--->
        ul
            li--->
 */

function Li(item) {
    let li = document.createElement('LI');
    li.addEventListener("click"  , function(event){


        event.target.classList.toggle('is-expand') ;
        console.log(event.target) ;
        event.stopPropagation();
        
    } )

    let img = document.createElement('IMG');
    img.src = icons[state.nav];
    li.appendChild(img);

    let span = document.createElement('SPAN');
    span.innerHTML = item.name;
    li.appendChild(span);

    //add subFolders List
    if (item.children) {
        let ul = document.createElement('UL');
        ul.className = 'aside__list';

        item.children.forEach(el => {
            ul.appendChild(Li(el));
        })

        li.appendChild(ul);

    }

    return li;
}

function initAside(folders) {
    // get State
    switch (state.nav) {
        case 'folder': {
            renderFolders(folders);
        }
        case 'tag': {
            //
        }
        case 'favorit': {
            // 
        }
        case 'bookmark': {
            //
        }
    }
    // get Folders || Tags || Bookmarks
    // render theme
}