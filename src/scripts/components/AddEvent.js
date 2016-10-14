/**
 * Created by Administrator on 2016/9/30.
 */

var React = require('react');
import {hashHistory} from 'react-router'

var AddEvent = React.createClass({
    getInitialState: function () {
        return {
            toptips: '',
            toptipsDisplay: false,
            toptipsClass: 'sys-toptips'
        }
    },

    //提交事件
    handleClick: function () {

        var Dtitle = this.refs.title.value;
        var Dtype = this.refs.type.value;
        var Dcontent = this.refs.content.value;
        var Daddr = this.refs.addr.value;
        //var DcreateTime = this.getCurrentTime;
        var Dstatus = 1;

        //非空判断
        if (this.refs.title.value == '' || this.refs.title.value == null) {
            this.errorToptips('请输入标题！');
            return false;
        }
        if (this.refs.content.value == '' || this.refs.content.value == null) {
            this.errorToptips('请输入内容！');
            return false;
        }
        if (this.refs.addr.value == '' || this.refs.addr.value == null) {
            this.errorToptips('请输入地址！');
            return false;
        }

        var event_info = {
            title: Dtitle,
            type: Dtype,
            content: Dcontent,
            addr: Daddr,
            //createTime: DcreateTime,
            status: Dstatus
        };

        //提交数据
        this.eventSubmit(event_info);


    },

    //错误提示
    errorToptips: function (note) {
        this.setState({
            toptipsDisplay: true,
            toptips: note
        });

        setTimeout(function () {
            this.setState({
                toptipsClass: 'sys-toptips sys-toptips-show'
            });
        }.bind(this),200);

        setTimeout(function () {
            this.setState({
                toptipsClass: 'sys-toptips'
            });
        }.bind(this),3000);
    },

    eventSubmit: function (data) {
        $.ajax({
            url: 'http://localhost/server/reportEvent.php',
            type: 'POST',
            data: data,
            success: function () {
                //提交后清空input
                this.refs.title.value = '';
                this.refs.type.value = '环保（常规）';
                this.refs.content.value = '';
                this.refs.addr.value = '';

                hashHistory.push('/')

            }.bind(this),
            error: function () {

            }.bind(this)
        })
    },

    getCurrentTime: function () {
        var date = new Date();
        var seperator1 = '-';
        var seperator2 = ':';
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + ' ' + date.getHours() + seperator2 + date.getMinutes()
            + seperator2 + date.getSeconds();
        return currentdate;
    },

    render: function () {
        return (
            <div>

                <div className="content">

                    <div className="v-card-cell">
                        <div className="card-header">
                            <i className="icon-title"></i>
                            <h4 className="title text-nowrap">事件标题</h4>
                        </div>

                        <div className="card-body">
                            <div className="content-box">
                                <input type="text" className="v-input" placeholder="请在此输入..." ref="title"/>
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
                                <select name="" id="" className="v-select-control" ref="type">
                                    <option>环保（常规）</option>
                                    <option>道路清理</option>
                                    <option>绿化</option>
                                    <option>交通枢纽</option>
                                    <option>空气净化</option>
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
                                <textarea rows="3" className="v-textarea" placeholder="请在此输入..."
                                          ref="content"></textarea>
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
                                <input type="text" className="v-input" placeholder="点击右侧按钮获取当前位置..." ref="addr"/>
                            </div>
                        </div>

                        <a href="javascript:;" className="v-button circle flat get-location-btn">
                            <i className="icon-position"></i>
                        </a>
                    </div>

                    <div className="button-box">
                        <a href="javascript:;" className="v-button primary block large"
                           onClick={this.handleClick}>提交</a>
                    </div>
                </div>

                <div className={this.state.toptipsClass} ref="toptips"
                     style={{display: this.state.toptipsDisplay?'block':'none'}}>{this.state.toptips}
                </div>
            </div>
        )
    }
});

module.exports = AddEvent;
