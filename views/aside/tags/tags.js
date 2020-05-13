let _tagList = document.getElementById('asideTagList');
function appendTag(tag){
    console.table(tag) ;
    _tagList.appendChild(li_AsideTag(tag));
}



function li_AsideTag(tag) {
    let li = document.createElement('LI');

    li.addEventListener("click", function (event) {
        
    })
    // append image
    let img = document.createElement('IMG');
    img.src = 'assets/icon-tag.png';
    li.appendChild(img);
    // append span
    let span = document.createElement('SPAN');
    span.innerHTML = tag.label;
    li.appendChild(span);

    // append subFolders
    

    return li;
}