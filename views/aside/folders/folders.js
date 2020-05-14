function appendFolder(folder) {
    let _folderList = document.getElementById('asideFoldersList');
    _folderList.appendChild(Li(folder));
}

function initAside(folders) {
    renderFolders(folders);
}

function Li(item) {
    let li = document.createElement('LI');
    li.dataset.url = item.url;
    li.addEventListener("click", function (event) {
        appState.folder = item.url;

        showItemsInFolder();
        // event.target.classList.toggle('is-expand');
        // event.stopPropagation();
    })
    // append image
    let img = document.createElement('IMG');
    img.src = 'assets/icon-folder.png';
    li.appendChild(img);
    // append span
    let span = document.createElement('SPAN');
    span.innerHTML = item.url.split('\\').pop().split('/').pop();
    li.appendChild(span);

    // 
    return li;
}


// function Li(item) {
//     let li = document.createElement('LI');

//     li.addEventListener("click", function (event) {
//         event.target.classList.toggle('is-expand');
//         event.stopPropagation();
//     })
//     // append image
//     let img = document.createElement('IMG');
//     img.src = 'assets/icon-folder.png';
//     li.appendChild(img);
//     // append span
//     let span = document.createElement('SPAN');
//     span.innerHTML = item.name;
//     li.appendChild(span);

//     // append subFolders
//     if (item.children) {

//         let ul = document.createElement('UL');
//         ul.className = 'aside__list';

//         item.children.forEach(el => {
//             ul.appendChild(Li(el));
//         })

//         li.appendChild(ul);

//     }

//     return li;
// }