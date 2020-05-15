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
        appState.pathHistory = new Array();
        appState.pathHistory.push(item.url);


        contentFolder.showContentInFolder();
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