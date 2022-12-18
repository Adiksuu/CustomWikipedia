let setParams: string;

window.setTimeout(() => {
    searchArticle.value = paramsWiki;
}, 20)
function searchArticleConfirm() {
    if (setParams != '') {
        window.location.search = `?wiki=${setParams}`;
    } else if (setParams == '') {
        window.location.search = '';
    }
}

window.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        searchArticleConfirm();
    }
})

window.setInterval(() => {
    setParams = searchArticle.value;

    if (paramsWiki != null) {
        contentSearched.classList.add('show');
        contentHome.classList.add('hide');
    } else if (paramsWiki == null) {
        contentSearched.classList.remove('show');
        contentHome.classList.remove("hide");
    }
}, 10)