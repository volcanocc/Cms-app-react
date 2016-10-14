/**
 * Created by Administrator on 2016/10/14.
 */

var React = require('React');
var EventList = require('./EventList.js');
var AddEvent = require('./AddEvent.js');

import {Link} from 'react-router'



var Index = React.createClass({
    getInitialState: function () {
        return ({
            loadingDisplay: false
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

                {this.props.children && React.cloneElement(this.props.children, {
                    sysLoadingShow: this.sysLoadingShow,
                    sysLoadingHide: this.sysLoadingHide
                })}

                <div className="sys-loading" style={{display: this.state.loadingDisplay?'block':'none'}}>
                    <span className="loader-ani"></span>
                    <p>加载中</p>
                </div>
                <div className="sys-mask" style={{display: this.state.loadingDisplay?'block':'none'}}></div>
            </div>
        )
    }
});

module.exports = Index;
