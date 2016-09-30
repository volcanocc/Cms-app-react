/**
 * Created by CAN on 2016/9/25.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ListDeal = require('./components/ListDeal.js');

var Wrapper = React.createClass({
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
                <ListDeal sysLoadingShow={this.sysLoadingShow} sysLoadingHide={this.sysLoadingHide}/>
                <div className="sys-loading" style={{display: this.state.loadingDisplay?'block':'none'}}>
                    <span className="loader-ani"></span>
                    <p>加载中</p>
                </div>
                <div className="sys-mask" style={{display: this.state.loadingDisplay?'block':'none'}}></div>
            </div>
        )
    }
});

module.exports = Wrapper;


ReactDOM.render(
    <Wrapper />,
    document.getElementById('app')
);

