/**
 * Created by Administrator on 2016/10/11.
 */

var React = require('react');


var EventDetail = React.createClass({

    getInitialState: function () {
        return ({
            itemId: this.props.params.itemId,
            data: ''
        })
    },

    componentWillMount: function () {
        this.props.sysLoadingShow();
        $.ajax({
            url: 'http://localhost/server/getCurEventDetail.php',
            type: 'GET',
            data: {id: this.state.itemId},
            dataType: 'json',
            success: function (data) {
                this.setState({
                    data: data['list'][0]
                });
                this.props.sysLoadingHide();
            }.bind(this),
            error: function (data) {

            }.bind(this)
        })
    },

    render: function () {
        return (
            <div className="wrapper">

                <div className="content">

                    <div className="t-card">
                        <div className="card-header">
                            <h4 className="title">{this.state.data.title}</h4>
                        </div>

                        <div className="card-body">
                            <div className="info-box">
                        <span>
                            <i className="icon-time-s"></i>
                            {this.state.data.createTime}
                        </span>
                        <span>
                            <i className="icon-location-s"></i>
                            {this.state.data.addr}
                        </span>
                            </div>
                        </div>
                    </div>

                    <div className="v-card-cell">
                        <div className="card-header">
                            <i className="icon-tag"></i>
                            <h4 className="title text-nowrap">事件类型</h4>
                        </div>

                        <div className="card-body">
                            <div className="content-box">
                                <p>
                                    {this.state.data.type? this.state.data.type : '暂无'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="v-card-cell">
                        <div className="card-header">
                            <i className="icon-content"></i>
                            <h4 className="title text-nowrap">事件内容</h4>
                        </div>

                        <div className="card-body">
                            <div className="content-box">
                                <p>
                                    {this.state.data.content}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
});

module.exports = EventDetail;
