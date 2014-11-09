/**
 * @jsx React.DOM
 */

var React = require("react");

var ToDo = React.createClass(
{
	render: function()
	{
		return (
			<div className="to-do">
				{this.props.task}
			</div>
		);
	}
});

module.exports = ToDo;