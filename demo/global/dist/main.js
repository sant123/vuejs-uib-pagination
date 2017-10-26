var app = new Vue({
    el: "#app",
    data: {
        totalItems: 64,
        pagination1: {
            currentPage: 4
        },
        pagination2: {
            currentPage: 1
        },
        setPage: function (pageNo) {
            this.pagination1.currentPage = pageNo;
        },
        pageLabelHtml: function (pageNo) {
            return "<b>" + pageNo + "</b>";
        },
        pageChanged: function () {
            console.log('Page changed to: ' + this.pagination1.currentPage);
        },
        maxSize: 5,
        bigTotalItems: 175
    }
});