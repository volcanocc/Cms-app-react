/**
 * Created by CAN on 2016/9/25.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ListDeal = require('./components/ListDeal/index.js');
var DetailReport = require('./components/DetailReport/index.js');

import { Router, Route, hashHistory } from 'react-router';




ReactDOM.render((
        <Router history={hashHistory}>
            <Route path="/" component={ListDeal} />
            <Route path="DetailReport" component={DetailReport} />
        </Router>
    ),
    document.getElementById('app')
);

