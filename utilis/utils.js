exports.createElement = function (element, attribs, childs) {

    let el = document.createElement(element);

    if (attribs.className) el.className = attribs.className;
    if (attribs.id) el.id = attribs.id;
    if (attribs.txt) el.innerText = attribs.txt;
    if (attribs.src) el.src = attribs.src;
    if (attribs.type) el.type = attribs.type;
    if (attribs.data) el.data = attribs.data;
    if (childs)
        childs.forEach(element => {
            el.appendChild(element);
        });
    return el;
}

exports.utilAppendRoot = function (element) {
    document.body.appendChild(element);
}

exports.utilAppend = function (parent, child) {
    if (parent)
        parent.appendChild(child);
    else
        console.error('parent dosnt exist');

}