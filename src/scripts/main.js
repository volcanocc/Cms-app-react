/**
 * Created by CAN on 2016/9/25.
 */
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

var Index = require('./components/Index.js');
var EventList = require('./components/EventList.js');
var AddEvent = require('./components/AddEvent.js');
var EventDetail = require('./components/EventDetail.js');


ReactDOM.render((

    <Router history={hashHistory}>
        <Route path="/" component={Index} >
            <IndexRoute component={EventList}/>
            <Route path="/EventList" component={EventList} />
            <Route path="/AddEvent" component={AddEvent} />
            <Route path="/EventDetail/:itemId" component={EventDetail} />
        </Route>

    </Router>

    ),document.getElementById('app')

);
