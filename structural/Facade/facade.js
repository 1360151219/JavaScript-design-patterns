export function addEvent(dom, type, fn) {
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false)
    } else if (dom.attachEvent) {
        dom.addEvent('on' + type, fn)
    } else {
        dom['on' + type] = fn
    }
}

// ***************************************************************
const Input = document.querySelector('input')
for (let i of Input) {
    addEvent(i, 'click', () => { console.log(1); })
}