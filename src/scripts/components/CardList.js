/**
 * Created by CAN on 2016/9/25.
 */

var React = require('react');

import {Link} from 'react-router';



var CardList = React.createClass({
    getInitialState: function () {
        return ({
            data: []
        });
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({data: nextProps.list});
    },
    render: function () {
        return (
            <div className="content content-bar">
                {
                    this.state.data.map(function (item, i) {
                        return (
                            <Link to="EventDetail" className="v-card-preview" key={i} data-id={item.id}>
                                <div className="card-header">
                                    <span className="avatar">
                                        <i className="icon-event"></i>
                                    </span>
                                    <h3 className="title text-nowrap">{item.title}</h3>
                                    <i className="icon-arrow-right arrow-icon"></i>
                                </div>

                                <div className="card-body">
                                    <div className="content-box">
                                        <div className="content-text text-nowrap-multi">{item.content}</div>
                                        <div className="info-box">
                                        <span>
                                            <i className="icon-time-s"></i>
                                            {item.createTime}
                                        </span>
                                         <span>
                                            <i className="icon-location-s"></i>
                                             {item.addr}
                                         </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    }.bind(this))
                }

                <div className="no-data" style={{display: this.state.data.length>0 ? 'none' : 'block'}}>
                    <span></span>
                </div>
            </div>
        )
    }

});

module.exports = CardList;
