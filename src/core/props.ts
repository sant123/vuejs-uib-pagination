import * as v from "./utils";

export let boundaryLinks = {
    type: Boolean,
    default: false
};

export let boundaryLinkNumbers = {
    type: Boolean,
    default: false
};

export let directionLinks = {
    type: Boolean,
    default: true
};

export let disabled = {
    type: Boolean,
    default: false
};

export let firstText = {
    type: String,
    default: "First"
};

export let forceEllipses = {
    type: Boolean,
    default: false
};

export let itemsPerPage = {
    type: Number,
    default: 10
};

export let lastText = {
    type: String,
    default: "Last"
};

export let maxSize = {
    type: Number,
    default: undefined
};

export let nextText = {
    type: String,
    default: "Next"
};

export let changeOnClick = {
    type: Boolean,
    default: false
};

/* vModel { currentPage: 1, numPages: 10 } */
export let value = {
    type: Object,
    required: true,
    validator: function (value: uibParentModel) {
        return !v.isDefined(value.currentPage) || typeof value.currentPage === "number";
    }
};

export let pageLabel = {
    type: Function,
    default: v.identity
};

export let previousText = {
    type: String,
    default: "Previous"
};

export let rotate = {
    type: Boolean,
    default: true
};

export let totalItems = {
    type: Number,
    default: 0
};