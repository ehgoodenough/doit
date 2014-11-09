/**
 * @jsx React.DOM
 */

var React = require("react");
var Moment = require("moment");
var Notify = require("notifyjs");

var ToDoStore = require("./ToDoStore.js");

var ToDo = React.createClass(
{
	getInitialState: function()
	{
		return {
			isFinished: false,
			startTime: Moment().format(),
			endTime: Moment().add(this.getRandomTimerange(), "seconds").format()
		}
	},
	componentWillMount: function()
	{
		this.interval = setInterval(function()
		{
			if(this.getCurrentTime() > this.getEndTime())
			{
				this.resetTimes();
				
				new Audio("stuff/doit." + Math.ceil(Math.random()*3) + ".mp3").play();
				
				/*new Notify("DO IT!",
				{
					body: this.props.task
				})
				.show();*/

				//this.state.maxTimerange /= 2;
				//this.state.minTimerange /= 2;
			}

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
						<a className="toggle" onClick={this.toggleFinished}>Did not do it?</a>
						<a className="archive" onClick={this.removeFromList}>x</a>
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
						<a className="toggle" onClick={this.toggleFinished}>Did it?</a>
						<a className="archive" onClick={this.removeFromList}>x</a>
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
	getRandomTimerange: function()
	{
		var maxTimerange = 60;
		var minTimerange = 20;

		return Math.random() * maxTimerange + minTimerange;
	},
	isFinished: function()
	{
		return this.state.isFinished;
	},
	toggleFinished: function()
	{
		this.state.isFinished = !this.state.isFinished;
		this.resetTimes();
		this.forceUpdate();
	},
	resetTimes: function()
	{
		this.state.startTime = Moment().format();
		this.state.endTime = Moment().add(this.getRandomTimerange(), "seconds").format();
	},
	removeFromList: function()
	{
		ToDoStore.removeValue(this.props.id);
		Main.forceUpdate();
	}
});

module.exports = ToDo;