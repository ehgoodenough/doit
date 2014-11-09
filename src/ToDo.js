/**
 * @jsx React.DOM
 */

var React = require("react");
var Moment = require("moment");

var ToDo = React.createClass(
{
	getInitialState: function()
	{
		return {
			startTime: Moment().format(),
			endTime: Moment().add(Math.random() * 40 + 20, "minutes").format()
		}
	},
	componentWillMount: function()
	{
		this.interval = setInterval(function()
		{
			this.forceUpdate();
		}
		.bind(this), 1000);
	},
	componentWillUnmount: function()
	{
		clearInterval(this.interval);
	},
	render: function()
	{
		return (
			<div className="to-do">
				<div className="time" style={{"width":  this.getCurrentTimerangePercentage()}}></div>
				<div className="content">
					<img src="stuff/forque.png"/>
					{this.props.task}
				</div>
			</div>
		);
	},
	getStartTime: function()
	{
		return new Date(this.state.startTime);
	},
	getEndTime: function()
	{
		return new Date(this.state.endTime);
	},
	getCurrentTime: function()
	{
		return Date.now();
	},
	getCurrentTimerange: function()
	{
		return this.getCurrentTime() - this.getStartTime();
	},
	getTotalTimerange: function()
	{
		return this.getEndTime() - this.getStartTime();
	},
	getCurrentTimerangePercentage: function()
	{
		return Math.min(100, this.getCurrentTimerange() / this.getTotalTimerange() * 100) + "%";
	}
});

module.exports = ToDo;