exports.contentFolder = {
    contentFolderElement: null,
    listFolders: null,
    listItems: null,
    navigation: null,
    selectedDirPath: null,

    showContentInFolder() {

        this.selectedDirPath = appState.pathHistory[appState.pathHistory['length'] - 1];
        let content = document.getElementById('content');
        content.innerHTML = "";

        this.contentFolderElement = document.createElement('DIV');
        this.contentFolderElement.classList.add('folder-wraper');

        // add navigation anchor
        this.navigation = document.createElement('UL');
        this.navigation.className = 'content__navigation';
        this.contentFolderElement.append(this.navigation);

        this.listFolders = document.createElement('DIV');
        this.listFolders.classList.add('content__folder-list');
        this.contentFolderElement.append(this.listFolders);

        this.listItems = document.createElement('DIV');
        this.listItems.classList.add('content__items-list');
        this.contentFolderElement.append(this.listItems);


        content.append(this.contentFolderElement);


        // this shows Content Section With content of clicked Folder.
        this.showNavigationInFolder();
        this.showFoldersInFolder();
        this.showItemsInFolder();

        console.table(this.selectedDirPath);

    },


    /*********************  NAVIGATION *************************** */

    showNavigationInFolder() {
        this.navigation.innerHTML = '';
        appState.pathHistory.forEach((u, $index) => {
            let li = document.createElement('LI');

            li.innerHTML = u.split('\\').pop();
            li.dataset.id = $index;
            li.addEventListener("click", function (event) {
                appState.folder = appState.pathHistory[$index];
                appState.pathHistory.splice($index + 1);
                contentFolder.showContentInFolder();
            })
            this.navigation.append(li)
        })

    },
    /*********************  FOLDERS LIST*************************** */
    appendFolder(folder) {
        this.listFolders.append(this.folderElement(folder));
    },
    showFoldersInFolder() {
        // get Folders From HDD
        //let url = appState.pathHistory[ appState.pathHistory.lenght - 1]
        let folders = fs.readdirSync(this.selectedDirPath)
            .map(file => path.join(this.selectedDirPath, file))
            .filter(path => fs.statSync(path).isDirectory());
        folders.forEach(folder => {
            this.appendFolder(folder);
        })
    },
    folderElement(url) {
        let folder = ui.createElement('DIV', {
            className: 'content__folder',
            data: url
        }, [
            ui.createElement('H3', {
                className: 'content__folder__title',
                txt: url.split('\\').pop()
            }),
            ui.createElement('SPAN', {
                className: 'content__folder__url',
                txt: url
            }),
        ]);
        folder.addEventListener("click", function (event) {
            appState.folder = url;
            appState.pathHistory.push(url);
            contentFolder.showContentInFolder();
        })
        return folder;
    },
    /*********************  ITEMS LIST*************************** */
    appendItem(item) {
        let el = this.itemElement(item);
        if (el) {
            this.listItems.append(el);
        }
    },
    itemElement(item) {


        if (['.jpeg', '.png', '.gif', '.svg', '.jpg', '.webp', '.tiff', '.raw', '.bmp', '.heif', '.indd'].includes(path.extname(item))) {
            let img = document.createElement('IMG');
            img.classList.add('item--img');
            img.src = item;
            return img;
        }

    },
    //get Images From HDD and Show Theme
    showItemsInFolder() {

        let files = fs.readdirSync(this.selectedDirPath)
            .map(file => path.join(this.selectedDirPath, file))
            .filter(path => fs.statSync(path).isFile());
        files.forEach(f => {
            this.appendItem(f);
        })




        // if (appState.folder) {
        //     const tree = dirTree(appState.folder);
        //     tree.children.forEach(file => {
        //         this.appendItem(file);
        //     });
        // }
    },
}