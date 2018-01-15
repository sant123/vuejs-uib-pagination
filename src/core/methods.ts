export function getText(this: uibPagination, key: string): string {
    return this[key + "Text"];
}

export function selectPage(this: uibPagination, page: number, evt) {
    if (evt) {
        evt.preventDefault();
    }

    let clickAllowed = !this.disabled || !evt;

    if (clickAllowed && this.currentPage !== page && page > 0 && page <= this.totalPages) {
        if (evt && evt.target) {
            evt.target.blur();
        }
        this.currentPage = page;
        if (this.changeOnClick) { this.$emit("change"); }
    }
}

export function makePage(number: number, text: string | number, isActive: boolean): uibPage {
    return { number: number, text: text, active: isActive };
}

export function createDataForModel(currentPage: number, numPages: number): uibParentModel {
    let data = { currentPage, numPages };

    Object.defineProperties(data, {
        numPages: {
            get() {
                return numPages;
            }
        }
    });

    return data;
}