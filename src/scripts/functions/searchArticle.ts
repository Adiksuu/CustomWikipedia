let setParams: string;

window.setTimeout(() => {
    searchArticle.value = paramsWiki;
}, 20)
function searchArticleConfirm() {
    if (setParams != '') {
        window.location.search = `?wiki=${setParams}`;
    }
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        searchArticleConfirm();
    }
})

window.setInterval(() => {
    setParams = searchArticle.value;
}, 10)