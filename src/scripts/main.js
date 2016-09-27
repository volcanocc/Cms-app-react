/**
 * Created by CAN on 2016/9/25.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var HelloWorld = require('./components/helloWorld.js');


ReactDOM.render(
    <HelloWorld name="Volcano"/>,
    document.getElementById('app')
);

