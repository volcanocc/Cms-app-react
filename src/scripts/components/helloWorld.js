/**
 * Created by CAN on 2016/9/25.
 */

var React = require('react');

var Hello = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },
    render: function () {
        return (
            <h1>
                hello {this.props.name}
            </h1>
        );
    }
});

module.exports = Hello;
