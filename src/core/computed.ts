import * as v from "./utils";

export function isNoPreviousOrDisabled(this: uibPagination) {
    return this.noPrevious || this.disabled;
}

export function isNoNextOrDisabled(this: uibPagination) {
    return this.noNext || this.disabled;
}

export function noNext(this: uibPagination) {
    return this.value.currentPage === this.totalPages;
}

export function noPrevious(this: uibPagination) {
    return this.value.currentPage === 1;
}

export function totalPages(this: uibPagination) {
    let totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
}

export function pages(this: uibPagination) {
    let pages: Array<uibPage> = [];

    if (this.currentPage <= 0 || this.currentPage > this.totalPages) {
        return pages;
    }

    // Default page limits
    let startPage = 1, endPage = this.totalPages;
    let isMaxSized = v.isDefined(this.maxSize) && this.maxSize < this.totalPages;

    // recompute if maxSize
    if (isMaxSized) {
        if (this.rotate) {
            // Current page is displayed in the middle of the visible ones 
            startPage = Math.max(this.currentPage - Math.floor(this.maxSize / 2), 1);
            endPage = startPage + this.maxSize - 1;

            // Adjust if limit is exceeded
            if (endPage > this.totalPages) {
                endPage = this.totalPages;
                startPage = endPage - this.maxSize + 1;
            }
        } else {
            // Visible pages are paginated with maxSize
            startPage = (Math.ceil(this.currentPage / this.maxSize) - 1) * this.maxSize + 1;

            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + this.maxSize - 1, this.totalPages);
        }
    }

    // Add page number links
    for (let number = startPage; number <= endPage; number++) {
        let page = this.makePage(number, this.pageLabel(number), number === this.currentPage);
        pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && this.maxSize > 0 && (!this.rotate || this.forceEllipses || this.boundaryLinkNumbers)) {
        if (startPage > 1) {
            if (!this.boundaryLinkNumbers || startPage > 3) { //need ellipsis for all options unless range is too close to beginning
                let previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (this.boundaryLinkNumbers) {
                if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
                    let secondPageLink = this.makePage(2, '2', false);
                    pages.unshift(secondPageLink);
                }
                //add the first page
                let firstPageLink = this.makePage(1, '1', false);
                pages.unshift(firstPageLink);
            }
        }

        if (endPage < this.totalPages) {
            if (!this.boundaryLinkNumbers || endPage < this.totalPages - 2) { //need ellipsis for all options unless range is too close to end
                let nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
            if (this.boundaryLinkNumbers) {
                if (endPage === this.totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
                    let secondToLastPageLink = this.makePage(this.totalPages - 1, this.totalPages - 1, false);
                    pages.push(secondToLastPageLink);
                }
                //add the last page
                let lastPageLink = this.makePage(this.totalPages, this.totalPages, false);
                pages.push(lastPageLink);
            }
        }
    }

    //  Emit the new data to the parent.
    this.$emit("input", this.createDataForModel(this.currentPage, this.totalPages));

    return pages;
}