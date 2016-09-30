/**
 * Created by Administrator on 2016/9/30.
 */

var React = require('react');

var DetailReport = React.createClass({
    render:function () {
        return (
            <div className="wrapper">

                <div className="content">

                    <div className="v-card-cell">
                        <div className="card-header">
                            <i className="icon-title"></i>
                            <h4 className="title text-nowrap">事件标题</h4>
                        </div>

                        <div className="card-body">
                            <div className="content-box">
                                <input type="text" className="v-input" placeholder="请在此输入..." />
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
                                <select name="" id="" className="v-select-control">
                                    <option>环保（常规）</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
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
                                <textarea rows="3" className="v-textarea" placeholder="请在此输入..."></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="v-card-cell">
                        <div className="card-header">
                            <i className="icon-location"></i>
                            <h4 className="title text-nowrap">定位地点</h4>
                        </div>
                        <div className="card-body">
                            <div className="content-box">
                                <input type="text" className="v-input" placeholder="点击右侧按钮获取当前位置..." />
                            </div>
                        </div>

                        <a href="javascript:;" className="v-button circle flat get-location-btn">
                            <i className="icon-position"></i>
                        </a>
                    </div>

                    <div className="v-card-cell uploader">
                        <div className="card-header">
                            <i className="icon-photo"></i>
                            <h4 className="title text-nowrap">现场照片</h4>
                            <p className="file-num">2/6</p>
                        </div>

                        <div className="card-body">
                            <div className="content-box pic-box">
                                <ul className="uploader-files">
                                    <li className="file">
                                        <span className="uploader-progress" style={{width:'30%'}}></span>
                                        <a href="javascript:;" className="v-button circle flat small uploade-file-del">
                                            <i className="icon-round_close"></i>
                                        </a>
                                        <span className="s-fail"></span>
                                    </li>
                                    <li className="file"></li>
                                </ul>
                                <div className="uploader-btn">
                                    <input className="uploader_input" type="file" accept="image/*" multiple="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button-box">
                        <a href="javascript:;" className="v-button primary block large">提交</a>
                    </div>
                </div>

            </div>
        )
    }
});

module.exports = DetailReport;
