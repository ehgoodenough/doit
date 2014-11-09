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
			isFinished: false,
			startTime: Moment().format(),
			endTime: Moment().add(Math.random() * 10 + 20, "seconds").format()
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
		if(this.isFinished())
		{
			return (
				<div className="to-do" style={{backgroundColor: "#7FCA9F"}}>
					<div className="content">
						{this.props.task}
					</div>
				</div>
			);
		}
		else
		{
			return (
				<div className="to-do" style={{backgroundColor: "#F4BA70"}}>
					<div className="time" style={{"width":  this.getCurrentTimerangePercentage()}}></div>
					<div className="content">
						<img src="stuff/forque.png"/>
						{this.props.task}
						<a onClick={this.finish}>Did it?</a>
					</div>
				</div>
			);
		}
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
	},
	isFinished: function()
	{
		return this.state.isFinished;
	},
	finish: function()
	{
		this.state.isFinished = true;
		this.forceUpdate();
	}
});

module.exports = ToDo;