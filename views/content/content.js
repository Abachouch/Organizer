 function showItemsInFolder() {
     let items = document.getElementById('itemsList');
     items.innerHTML = "";
     console.log(`show items : ${appState.folder}`);

     if (appState.folder) {

         const tree = dirTree(appState.folder);
         tree.children.forEach(file => {
             appendItem(file);

         });
     }
 }


 function appendItem(item) {
     let items = document.getElementById('itemsList');
     items.appendChild(itemElement(item));

     console.log(`append this file ${item}`);
 }

 function itemElement(item) {

     console.log(item);
     if (['.jpeg', '.png', '.gif', '.svg', '.jpg', '.webp', '.tiff', '.raw', '.bmp', '.heif', '.indd'].includes(item.extension)) {
         let img = document.createElement('IMG');
         img.classList.add('item--img');
         img.src = item.path;
         return img;
     } else {
         let span = document.createElement('SPAN');
         span.classList.add('item--folder');
         span.innerHTML = item.name;
         return span;
     }

 }