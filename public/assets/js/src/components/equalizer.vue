<template>
    <div class="eq-container">
        <slot></slot>
    </div>
</template>

<script>
import debounce from "../helpers/debounce";
import chunk from "../helpers/chunk";
import imagesLoaded from "imagesloaded";

export default {
    props: {
        classes: {
            type: Array,
            default: []
        },
        config: {
            type: Object,
            default: () => ({
                0: null
            })
        }
    },
    data() {
        return {
            // Wrap in debounce function for performance.
            // Debounce wrapped function must be in the Data, not the Methods of the component because
            // the debounced function is created when the component is compiled,
            // and each instance of the component shares the same debounced function.
            // it executes once after specified time, so only the last component runs the function.
            // You need this function to be unique for each component, define the method in the data function because the data function is called for every instance of the component.
            equalize: debounce(function() {
                const breakpoint = this.getCurrentBreakpoint(); // get current breakpoint
                const itemsPerRow = this.config[breakpoint]; // get items per row for that breakpoint

                // loop over array of classes
                this.classes.forEach(elemClass => {
                    // Find nodelist of elements with the specified class and spread into array
                    const eqItems = [...this.$el.querySelectorAll(`.${elemClass}`)];
                    switch (true) {
                        case itemsPerRow > 1:
                            // If items per row specified, split items into rows and set height by row
                            const rows = chunk(eqItems, itemsPerRow);
                            rows.forEach(row => {
                                this.setMaxHeight(row, false);
                            });
                            break;
                        case itemsPerRow === 1:
                            // if 1 item per row, then height set to auto
                            this.setMaxHeight(eqItems, true);
                            break;
                        default:
                            // If not specified, just make all items equal height
                            this.setMaxHeight(eqItems, false);
                    }
                });
            }, 100)
        };
    },
    methods: {
        getCurrentBreakpoint() {
            let current;
            this.breakpoints.some(breakpoint => {
                current = breakpoint;
                return window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
            });

            return current;
        },
        setMaxHeight(items, auto) {
            imagesLoaded(items, () => {
                // Return array of items natural height
                let heights = items.map(item => {
                    item.style.height = "auto";
                    return item.clientHeight;
                });

                // Find the largest height
                let maxHeight;
                if (auto) {
                    maxHeight = "auto";
                } else {
                    maxHeight = `${Math.max.apply(null, heights)}px`;
                }

                // Map over each item and apply the max-height so they are all equal sized
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