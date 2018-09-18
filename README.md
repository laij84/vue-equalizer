# Vue Equalizer

Vue equalizer is a vue component to help solve a common frontend development problem where independent items and nested content need to be equal height.

Until the Level 2 CSS Grid specification which allows for subgrids is available and widely supported, javascript will be required to achieve this effect.

## The Problem

A common design frontend developers are given looks something like this. A row of blocks all with nicely aligned content.

![](public/assets/img/design.png?raw=true)

The reality is, once real and dynamic content is added the blocks end up looking like this:

![](public/assets/img/reality.png?raw=true)

Vue Equalizer fixes this.

## Usage

Basic usage of component

```
<equalizer
    :classes="['card','card-title', 'card-desc']"
    :config="{
        1360: 4,
        1024: 4,
        680: 3,
        0: 1
     }"
>
// HTML
</equalizer>
```

### Classes

The equalizer component accepts an array of classes. Each element of that class will be made the same height.

The classes prop is **required**.

### Config

The equalizer component accepts a config object of key value pairs. The key must be an integer which is a min-width breakpoint. The value is the number of elements per row at that breakpoint.

The config prop is **optional**. If no config object is passed as props then by default the equalizer will make all items the same height regardless of screen width.

## Demo

![](public/assets/img/equalizer.gif?raw=true)
