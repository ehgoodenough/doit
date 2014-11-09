/**
 * @jsx React.DOM
 */

var React = require("react");

var ToDo = React.createClass(
{
	/*getInitialState: function()
	{
		return {
			startTime: Date.now(),
			endTime: Date.now() + 
		}
	},*/
	render: function()
	{
		return (
			<div className="to-do">
				<img src="stuff/forque.png"/>
				{this.props.task}
			</div>
		);
	}
});

module.exports = ToDo;