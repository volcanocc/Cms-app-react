/**
 * Created by Administrator on 2016/9/29.
 */

var React = require('react');
var CardList = require('./CardList.js');

import {Link} from 'react-router'

var EventList = React.createClass({
    getInitialState: function () {
        return ({
            loadingDisplay: false,
            list: []
        })
    },

    componentWillMount: function () {
        this.sysLoadingShow();
        $.ajax({
            url: 'http://localhost/server/getEventList.php',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                this.setState({
                    list: data.list
                });
                this.sysLoadingHide();
            }.bind(this),
            error: function () {

            }.bind(this)
        })
    },

    sysLoadingShow: function () {
        this.setState({
            loadingDisplay: true
        })
    },
    sysLoadingHide: function () {
        this.setState({
            loadingDisplay: false
        })
    },

    render: function () {
        return (

        <div className="wrapper">

            <div className="top-bar">
                <Link to="AddEvent" className="add-event-btn">
                    <i className="icon-round_add" style={{fontSize: '2rem'}}></i>
                    <span>添加事件</span>
                </Link>
            </div>

            <CardList list={this.state.list}/>

            <div className="sys-loading" style={{display: this.state.loadingDisplay?'block':'none'}}>
                <span className="loader-ani"></span>
                <p>加载中</p>
            </div>
            <div className="sys-mask" style={{display: this.state.loadingDisplay?'block':'none'}}></div>
        </div>

        )
    }
});

module.exports = EventList;
