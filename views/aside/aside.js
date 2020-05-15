exports.asideSection = {

    showAsideFoldersSection() {
        $('#asideContent').load('./views/aside/folders/folders.htm', function () {
            // after document is loaded
            dbFolder.getFolders(function (err, doc) {

                doc.forEach(f => {
                    appendFolder(f);
                })

            });
        });
    },

    showAsideTagsSection() {
        $('#asideContent').load('./views/aside/tags/tags.htm', function () {
            // after document is loaded
            dbTag.getTags(function (err, doc) {

                doc.forEach(f => {
                    appendTag(f);
                })

            });
        });
    },

    showAsideBookmarksSection() {
        console.log("showAsideBookmarksSection");
    }

}