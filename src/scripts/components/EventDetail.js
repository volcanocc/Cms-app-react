/**
 * Created by Administrator on 2016/10/11.
 */

var React = require('react');


var EventDetail = React.createClass({
    render:function () {
        return (
            <div className="wrapper">

                <div className="content">

                    <div className="t-card">
                        <div className="card-header">
                            <h4 className="title">街道异物处理</h4>
                        </div>

                        <div className="card-body">
                            <div className="info-box">
                        <span>
                            <i className="icon-time-s"></i>
                            2016-08-31 10:22:17
                        </span>
                        <span>
                            <i className="icon-location-s"></i>
                            上海浦东新区博霞路50号
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
                                    环保（常规）
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
                                    人行道表面有不明物体挡住去路，查明后请尽快清理干净。
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
