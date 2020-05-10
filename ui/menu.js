
const {utilCreateElement} = require('../utilis/utils.js')


exports.tagMenu = function(filter, data) {

    let itmes = new Array();
    if (data) {
        data.forEach(e => {
            console.log(e) ;
            itmes.push(utilCreateElement('LI', {
                txt: e.label
            }));
        })
    } else {
        itmes.push(utilCreateElement('P', {
            txt: 'No Data'
        }));
    }

    let wraper = utilCreateElement('DIV', {
        id: 'tagMenu' ,
        className : "menu"
    }, [
        utilCreateElement('H1', {
            className: 'menu__header',
            txt: filter
        }),
        utilCreateElement('UL', {
            className: 'menu__list'
        }, itmes)
    ]);

    return wraper;
}
