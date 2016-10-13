/**
 * Created by CAN on 2016/9/25.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

var EventList = require('./components/EventList.js');
var AddEvent = require('./components/AddEvent.js');
var EventDetail = require('./components/EventDetail.js');


ReactDOM.render((

    <Router history={browserHistory}>
        <Route path="/" component={EventList} />
        <Route path="EventDetail" component={EventDetail} />
        <Route path="AddEvent" component={AddEvent} />
    </Router>

    ),document.getElementById('app')

);
