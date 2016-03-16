var my_event_handler  = require('./myeventhandler.js')
var changeButton  = require('./changeButton.js')
var add  = require('./add.js')

var clear  = require('./clear.js')
var sum  = require('./sum.js')
var multiplication  = require('./multiplication.js')

window.jQuery = $ = require('jquery')

// perguntar se tem algum jeito de passar o firstNumbers do add.js para outro arquivo sem transformar em variavel global


$(function() {
    my_event_handler();
    changeButton();
    add();
    clear();
    sum();
    multiplication();

});
