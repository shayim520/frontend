// in javascript you can pause the execution with fix time and then move on to next

// print Hello
// wait 3 seconds print LWC
// print World

console.log('Hello');
// setTimeout method is used for pausing execution
// it accepts 2 parameters
// 1 : a function that accepts no paam and provide logic
// 2 : time you want to wait in millisecond, 1s = 1000ms

setTimeout(() => {
    console.log('LWC');
}, 3000);

console.log('World');