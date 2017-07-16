import data from "./core/data";
import watch from "./core/watch";
import template from "./template/index.html";

import * as props from "./core/props";
import * as methods from "./core/methods";
import * as computed from "./core/computed";
import * as directives from "./core/directives";

export function install(Vue, options) {
    Vue.component("uib-pagination", {
        data,
        props,
        watch,
        methods,
        template,
        computed,
        directives
    });
}

if (typeof window !== 'undefined' && window["Vue"]) {
    window["Vue"].use(install);
}
