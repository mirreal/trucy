/* eslint-disable no-console, no-var */
function foo() {
    console.log('global foo')
}

function bar() {
    console.log('global bar')
}

function hoisting() {
    console.log(typeof foo) // 'function'
    console.log(typeof bar) // 'undefined'

    foo() // 'local foo'
    bar() // TypeError: bar is not a function

    function foo() {
        console.log('local foo')
    }

    // tips: 在 ES6 中 let 不存在 Hoisting
    var bar = function() {
        console.log('local bar')
    }
}

hoisting()
