export default function debounce (fn, delay) {
    let timeoutID = null
    return function () {
        clearTimeout(timeoutID)
        const args = arguments
        timeoutID = setTimeout( () => {
            fn.apply(this, args)
        }, delay)
    }
}