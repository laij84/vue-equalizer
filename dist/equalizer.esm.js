import debounce from 'debounce';
import imagesLoaded from 'imagesloaded';

(function () {
    if (typeof document !== 'undefined') {
        var head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style'),
            css = "";style.type = 'text/css';if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }head.appendChild(style);
    }
})();

var component = { render: function render() {
        var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', { staticClass: "eq-container" }, [_vm._t("default")], 2);
    }, staticRenderFns: [],
    props: {
        classes: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        config: {
            type: Object,
            default: function _default() {
                return {
                    0: undefined
                };
            }
        }
    },
    data: function data() {
        return {
            equalize: debounce(function () {
                var _this = this;

                var breakpoint = this.getCurrentBreakpoint();
                var itemsPerRow = this.config[breakpoint];

                this.classes.forEach(function (elemClass) {
                    var eqItems = Array.prototype.slice.call(_this.$el.querySelectorAll('.' + elemClass));
                    var rows = _this.chunk(eqItems, itemsPerRow);
                    rows.forEach(function (row) {
                        _this.setMaxHeight(row, itemsPerRow === 1);
                    });
                });
            }, 100)
        };
    },

    methods: {
        chunk: function chunk(a) {
            var number = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : a.length;

            var temp = a.slice();
            var arr = [];

            while (temp.length) {
                arr.push(temp.splice(0, number));
            }

            return arr;
        },
        getCurrentBreakpoint: function getCurrentBreakpoint() {
            var current = void 0;
            this.breakpoints.some(function (breakpoint) {
                current = breakpoint;
                return window.matchMedia('(min-width: ' + breakpoint + 'px)').matches;
            });

            return current;
        },
        getNaturalHeights: function getNaturalHeights(items) {
            return Array.prototype.slice.call(items).map(function (item) {
                item.style.height = "auto";
                return item.clientHeight;
            });
        },
        setMaxHeight: function setMaxHeight(items, auto) {
            var _this2 = this;

            imagesLoaded(items, function () {
                var heights = _this2.getNaturalHeights(items);

                var maxHeight = void 0;
                if (!auto) {
                    maxHeight = Math.max.apply(null, heights) + 'px';
                }

                items.map(function (item) {
                    item.style.height = maxHeight;
                });
            });
        }
    },
    computed: {
        breakpoints: function breakpoints() {
            return Object.keys(this.config).sort(function (a, b) {
                return b - a;
            });
        }
    },
    mounted: function mounted() {
        this.equalize();
        this.equalize = this.equalize.bind(this);
        window.addEventListener("resize", this.equalize);
    },
    beforeDestroy: function beforeDestroy() {
        this.equalize = this.equalize.bind(this);
        window.removeEventListener("resize", this.equalize);
    }
};

// Import vue component

// install function executed by Vue.use()
function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('equalizer', component);
}

// Create module definition for Vue.use()
var plugin = {
	install: install
};

// To auto-install when vue is found
var GlobalVue = null;
if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;

export default component;
export { install };
