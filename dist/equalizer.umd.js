(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('debounce'), require('imagesloaded')) :
    typeof define === 'function' && define.amd ? define(['exports', 'debounce', 'imagesloaded'], factory) :
    (factory((global.equalizer = {}),global.debounce,global.imagesLoaded));
}(this, (function (exports,debounce,imagesLoaded) { 'use strict';

    debounce = debounce && debounce.hasOwnProperty('default') ? debounce['default'] : debounce;
    imagesLoaded = imagesLoaded && imagesLoaded.hasOwnProperty('default') ? imagesLoaded['default'] : imagesLoaded;

    (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=""; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

    var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"eq-container"},[_vm._t("default")],2)},staticRenderFns: [],
        props: {
            classes: {
                type: Array,
                default: function (){}
            },
            config: {
                type: Object,
                default: function () { return ({
                    0: undefined
                }); }
            }
        },
        data: function data() {
            return {
                equalize: debounce(function() {
                    var this$1 = this;

                    var breakpoint = this.getCurrentBreakpoint();
                    var itemsPerRow = this.config[breakpoint];

                    this.classes.forEach(function (elemClass) {
                        var eqItems = [].concat( this$1.$el.querySelectorAll(("." + elemClass)) );

                        var rows = this$1.chunk(eqItems, itemsPerRow);
                        rows.forEach(function (row) {
                            this$1.setMaxHeight(row, itemsPerRow === 1);
                        });
                    });
                }, 100)
            };
        },
        methods: {
            chunk: function chunk(a, number) {
                if ( number === void 0 ) number = a.length;

                var temp = a.slice();
                var arr = [];

                while (temp.length) {
                    arr.push(temp.splice(0, number));
                }

                return arr;
            },
            getCurrentBreakpoint: function getCurrentBreakpoint() {
                var current;
                this.breakpoints.some(function (breakpoint) {
                    current = breakpoint;
                    return window.matchMedia(("(min-width: " + breakpoint + "px)")).matches;
                });

                return current;
            },
            getNaturalHeights: function getNaturalHeights(items) {
                return items.map(function (item) {
                    item.style.height = "auto";
                    return item.clientHeight;
                });
            },
            setMaxHeight: function setMaxHeight(items, auto) {
                var this$1 = this;

                imagesLoaded(items, function () {
                    var heights = this$1.getNaturalHeights(items);

                    var maxHeight;
                    if (!auto) {
                        maxHeight = (Math.max.apply(null, heights)) + "px";
                    }

                    items.map(function (item) {
                        item.style.height = maxHeight;
                    });
                });
            }
        },
        computed: {
            breakpoints: function breakpoints() {
                return Object.keys(this.config).sort(function(a, b) {
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
    	if (install.installed) { return; }
    	install.installed = true;
    	Vue.component('equalizer', component);
    }

    // Create module definition for Vue.use()
    var plugin = {
    	install: install,
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

    exports.install = install;
    exports.default = component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
