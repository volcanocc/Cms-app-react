/**
 * Created by Administrator on 2016/9/29.
 */

var React = require('react');
var DealCard = require('./DealCard.js');

var ListDeal = React.createClass({
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
                console.log(data);
                /*this.setState({
                    list: data.list
                });*/
                this.props.sysLoadingHide();
            }.bind(this),
            error: function () {

            }.bind(this)
        })
    },

    render: function () {
        return (
            <span>
                <div className="top-bar">
                    <a href="#/DetailReport" className="add-event-btn">
                        <i className="icon-round_add" style={{fontSize: '2rem'}}></i>
                        <span>添加事件</span>
                    </a>
                </div>

                <DealCard list={this.state.list}/>
            </span>
        )
    }
});

module.exports = ListDeal;
