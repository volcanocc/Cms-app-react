/**
 * Created by Administrator on 2016/9/29.
 */

var React = require('react');
var CardList = require('./CardList.js');

import {Link} from 'react-router'

var EventList = React.createClass({
    getInitialState: function () {
        return ({
            list: []
        })
    },

    componentWillMount: function () {
        this.props.sysLoadingShow();
        $.ajax({
            url: 'http://localhost/server/getEventList.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                this.setState({
                    list: data.list
                });
                this.props.sysLoadingHide();
            }.bind(this),
            error: function () {

            }.bind(this)
        })
    },

    render: function () {
        return (

        <div>
            <div className="top-bar">
                <Link to="/AddEvent" className="add-event-btn">
                    <i className="icon-round_add" style={{fontSize: '2rem'}}></i>
                    <span>添加事件</span>
                </Link>
            </div>

            <CardList list={this.state.list}/>
        </div>

        )
    }
});

module.exports = EventList;
