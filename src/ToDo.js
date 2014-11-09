/**
 * @jsx React.DOM
 */

var React = require("react");
var Moment = require("moment");

var ToDo = React.createClass(
{
	getInitialState: function()
	{
		console.log(Moment().add(5, "minutes").format())
		return {
			startTime: Date.now(),
			endTime: Date.now()
		}
	},
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