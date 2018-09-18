# Vue Equalizer

Vue equalizer is a vue component to help solve a common frontend development problem where independent items and nested content need to be equal height.

Until the Level 2 CSS Grid specification which allows for subgrids is available and widely supported, javascript will be required to achieve this effect.

## The Problem

A common design frontend developers are given looks something like this. A row of blocks all with nicely aligned content.

![](https://www.dropbox.com/s/u5rfpf9j4as6mp0/design.png?raw=true)

The reality is, once real and dynamic content is added the blocks end up looking like this:

![](https://www.dropbox.com/s/j0bizafvizpw424/reality.png?raw=true)

Vue Equalizer fixes this.

## How to use

### Installation

```
npm install --save vue-equalizer
```

Then, in your javascript file:

```js
import Vue from "vue";
import equalizer from "vue-equalizer";

new Vue({
    el: "#app",
    components: { equalizer }
});
```

Alternatively add the CDN script tag directly to your page.

```html
<script src="https://unpkg.com/vue-equalizer@1.0.3/dist/equalizer.min.js"></script>
```

In your HTML:

```html
<div id="app">
    <equalizer
    :classes="['card','card-title', 'card-desc']"
    :config="{
        1024: 4,
        680: 3,
        0: 1
    }"
    >
        <!-- HTML -->
    </equalizer>
</div>
```

### Classes

The equalizer component accepts an array of classes. Each element of that class will be made the same height.

The classes prop is **required**.

### Config

The equalizer component accepts a config object of key value pairs. The key must be an integer which is a min-width breakpoint. The value is the number of elements per row at that breakpoint.

The config prop is **optional**. If no config object is passed as props then by default the equalizer will make all items the same height regardless of screen width.

## Demo

![](https://www.dropbox.com/s/exqqfy1npnsmoua/equalizer.gif?raw=true)
