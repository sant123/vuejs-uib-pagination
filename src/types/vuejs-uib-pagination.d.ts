interface uibPagination extends uibPaginationComputed, uibPaginationMethods, uibPaginationModel, uibPaginationProps { }

interface uibPaginationData extends uibPaginationMethods, uibPaginationProps { }

interface uibPaginationComputed {
    /** Computed - Has reached the last page. */
    readonly noNext: boolean;

    /** Computed - Has reached the first page. */
    readonly noPrevious: boolean;

    /** Computed - Shorhand for is noPrevious or disabled. */
    readonly isNoPreviousOrDisabled: boolean;

    /** Computed - Shorhand for is noNext or disabled. */
    readonly isNoNextOrDisabled: boolean;

    /** Computed - Total number of pages to display. */
    readonly totalPages: number;
}

interface uibPaginationMethods {
    /** Method - Mutate parent's v-model. */
    $emit(input: string, value?: any): void;

    /** Method - Create a schema for parent's model. */
    createDataForModel(currentPage: number, numPages: number): uibParentModel;

    /** Method - Create a schema for each page in the pagination plugin. */
    makePage(number: number, text: string | number, isActive: boolean): uibPage;
}

interface uibPaginationModel {
    /** Model - Current page number. */
    currentPage: number;
}

interface uibPaginationProps {
    /** Property - Whether to display First / Last buttons. */
    readonly boundaryLinks: boolean;

    /** Property - Whether to always display the first and last page numbers. If max-size is smaller than the number of pages, then the first and last page numbers are still shown with ellipses in-between as necessary. NOTE: max-size refers to the center of the range. This option may add up to 2 more numbers on each side of the displayed range for the end value and what would be an ellipsis but is replaced by a number because it is sequential. */
    readonly boundaryLinkNumbers: boolean;

    /** Property - Whether to display Previous / Next buttons. */
    readonly directionLinks: boolean;

    /** Property - Used to disable the pagination component. */
    readonly disabled: boolean;

    /** Property - Text for First button. */
    readonly firstText: string;

    /** Property - Also displays ellipses when rotate is true and max-size is smaller than the number of pages. */
    readonly forceEllipses: boolean;

    /** Property - Maximum number of items per page. A value less than one indicates all items on one page. */
    readonly itemsPerPage: number;

    /** Property - Text for Last button. */
    readonly lastText: string;

    /** Property - Limit number for pagination size. */
    readonly maxSize: number;

    /** Property - Text for Next button. */
    readonly nextText: string;

    /** Property - Emit `change` events on click. */
    readonly changeOnClick: boolean;

    /** Property - V-model from parent. */
    readonly value: uibParentModel;

    /** Property - Override the page label based on passing the current page indexes. Supports page number with a paramenter. */
    readonly pageLabel: Function;

    /** Property - Text for Previous button. */
    readonly previousText: string;

    /** Property - Whether to keep current page in the middle of the visible ones. */
    readonly rotate: boolean;

    /** Property - Total number of items in all pages. */
    readonly totalItems: number;
}

interface uibParentModel {
    /** Current page number. */
    readonly currentPage: number;

    /** Total number of pages to display. */
    readonly numPages: number;
}

interface uibPage {
    /** Number page. */
    number: number;

    /** Content page. */
    text: string | number;

    /** Is active? */
    active: boolean;
}

interface vueBinding {
    readonly name: string;
    readonly value: any;
    readonly oldValue: any;
    readonly expression: any;
    readonly arg: string;
    readonly modifiers: { [key: string]: boolean };
}

declare module "*.html" {
    var html: string;
    export default html;
}