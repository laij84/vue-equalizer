<template>
    <div class="eq-container">
        <slot></slot>
    </div>
</template>

<script>
import debounce from "debounce";
import imagesLoaded from "imagesloaded";

export default {
    props: {
        classes: {
            type: Array,
            default: ()=> {[]}
        },
        config: {
            type: Object,
            default: () => ({
                0: undefined
            })
        }
    },
    data() {
        return {
            equalize: debounce(function() {
                const breakpoint = this.getCurrentBreakpoint();
                const itemsPerRow = this.config[breakpoint];

                this.classes.forEach(elemClass => {
                    const eqItems = [...this.$el.querySelectorAll(`.${elemClass}`)];

                    const rows = this.chunk(eqItems, itemsPerRow);
                    rows.forEach(row => {
                        this.setMaxHeight(row, itemsPerRow === 1);
                    });
                });
            }, 100)
        };
    },
    methods: {
        chunk(a, number = a.length) {
            const temp = a.slice();
            const arr = [];

            while (temp.length) {
                arr.push(temp.splice(0, number));
            }

            return arr;
        },
        getCurrentBreakpoint() {
            let current;
            this.breakpoints.some(breakpoint => {
                current = breakpoint;
                return window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
            });

            return current;
        },
        getNaturalHeights(items) {
            return items.map(item => {
                item.style.height = "auto";
                return item.clientHeight;
            });
        },
        setMaxHeight(items, auto) {
            imagesLoaded(items, () => {
                let heights = this.getNaturalHeights(items);

                let maxHeight;
                if (!auto) {
                    maxHeight = `${Math.max.apply(null, heights)}px`;
                }

                items.map(item => {
                    item.style.height = maxHeight;
                });
            });
        }
    },
    computed: {
        breakpoints() {
            return Object.keys(this.config).sort(function(a, b) {
                return b - a;
            });
        }
    },
    mounted() {
        this.equalize();
        this.equalize = this.equalize.bind(this);
        window.addEventListener("resize", this.equalize);
    },
    beforeDestroy() {
        this.equalize = this.equalize.bind(this);
        window.removeEventListener("resize", this.equalize);
    }
};
</script>