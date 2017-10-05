# vuejs-uib-pagination
Best and complete pagination plugin for Vue.js 2.0. Inspired in [Angular Bootstrap Pagination](https://angular-ui.github.io/bootstrap/#pagination).

## Not Using Bootstrap?
No problem! The plugin template is not 100% Bootstrap dependent, that is why you can build your own styles for your pagination!

## Demo
Click [here](https://plnkr.co/edit/hcfYWCTaQ7GnlO7AitGM?p=preview).

## Installation

```sh
$ npm install vuejs-uib-pagination
```

## Quick Start

Global:

```html
<script src="node_modules/vue/dist/vue.js"></script>
<script src="node_modules/vuejs-uib-pagination/dist/vuejs-uib-pagination.js"></script>
```

CommonJS:

```javascript
var Vue = require("vue");
var pagination = require("vuejs-uib-pagination");

Vue.use(pagination);
```

ES2015:

```javascript
import * as Vue from "vue";
import pagination from "vuejs-uib-pagination";

Vue.use(pagination);
```

## Use

HTML:

```html
<div id="app">
    <div is="uib-pagination" v-model="pagination" :total-items="22"></div>
    <!-- or -->
    <uib-pagination v-model="pagination" :total-items="22"></uib-pagination>
</div>
```

Script:

```javascript
var app = new Vue({
    el: "#app",
    data: {
        pagination: { }
    }
});
```

## Settings

The settings are almost the same as Angular Bootstrap Pagination, there are only 3 differences:

* `v-model` is an object and has these keys:
    * currentPage
    * numPages (avoid [props mutation anti-patern](https://vuejs.org/v2/guide/migration.html#Prop-Mutation-deprecated))
* `page-label` does not accept expressions, it works with functions.
* `template-url` is not supported.

### boundary-links

(Default: false) - Whether to display First / Last buttons.

```html
<div is="uib-pagination" v-model="pagination" :boundary-links="false"></div>
```

### boundary-link-numbers

(Default: false) - Whether to always display the first and last page numbers. If max-size is smaller than the number of pages, then the first and last page numbers are still shown with ellipses in-between as necessary. NOTE: max-size refers to the center of the range. This option may add up to 2 more numbers on each side of the displayed range for the end value and what would be an ellipsis but is replaced by a number because it is sequential.

```html
<div is="uib-pagination" v-model="pagination" :boundary-link-numbers="false"></div>
```

### direction-links

(Default: true) - Whether to display Previous / Next buttons.

```html
<div is="uib-pagination" v-model="pagination" :direction-links="true"></div>
```

### first-text

(Default: First) - Text for First button.

```html
<div is="uib-pagination" v-model="pagination" first-text="First"></div>
```

### force-ellipses

(Default: false) - Also displays ellipses when rotate is true and max-size is smaller than the number of pages.

```html
<div is="uib-pagination" v-model="pagination" :force-ellipses="false"></div>
```

### items-per-page

(Default: 10) - Maximum number of items per page. A value less than one indicates all items on one page.

```html
<div is="uib-pagination" v-model="pagination" :items-per-page="10"></div>
```

### last-text
(Default: Last) - Text for Last button.

```html
<div is="uib-pagination" v-model="pagination" last-text="Last"></div>
```

### max-size
(Default: null) - Limit number for pagination size.

```html
<div is="uib-pagination" v-model="pagination" :max-size="7"></div>
```

### next-text
(Default: Next) - Text for Next button.

```html
<div is="uib-pagination" v-model="pagination" next-text="Next"></div>
```

### change
This can be used to call a function whenever the page changes.

```html
<div is="uib-pagination" v-model="pagination" @change="someFunction"></div>
```

### disabled
(Default: false) - Used to disable the pagination component.

```html
<div is="uib-pagination" v-model="pagination" :disabled="false"></div>
```

### v-model
(Required)
* pagination (Default: 1) - Current page number. First page is 1.
* numPages (Readonly) - Total number of pages to display.

```html
<div is="uib-pagination" v-model="pagination"></div>
```

### page-label
(Default: identity) - Override the page label based on passing the current page indexes. Supports page number with a paramenter. 

```html
<div is="uib-pagination" v-model="pagination" :page-label="someFunction"></div>
```

### previous-text
(Default: Previous) - Text for Previous button.

```html
<div is="uib-pagination" v-model="pagination" previous-text="Previous"></div>
```

### rotate
(Default: true) - Whether to keep current page in the middle of the visible ones.

```html
<div is="uib-pagination" v-model="pagination" :rotate="true"></div>
```

### total-items
Total number of items in all pages.

```html
<div is="uib-pagination" v-model="pagination" :total-items="72"></div>
```

## Inspiration
Give people comming from Angular.js major facility to use pagination.

## License

[MIT](LICENSE)
