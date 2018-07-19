const $ = require('jquery');

$('#btn').click(function () {
    $('body').css('background-color', 'yellow');
});

let sayHello = (name) => console.log('Hello, this is COOL!');

sayHello('amos');


const helloMessage = require('./say-hello.js');
// let createButton = require('./say-hello.js');
console.log(helloMessage());
// console.log(createButton());