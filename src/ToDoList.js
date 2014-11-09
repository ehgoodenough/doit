/**
 * @jsx React.DOM
 */

var React = require("react");

var ToDo = require("./ToDo.js");

var ToDoList = React.createClass(
{
	getInitialState: function()
	{
		return {
			tasks: {
				123: "Take out the trash",
				124: "Call your grandma",
				125: "Mow the lawn",
			}
		};
	},
	render: function()
	{
		var todos = Object.keys(this.state.tasks).map(function(key)
		{
			return (
				<ToDo key={key} task={this.state.tasks[key]} id={key} />
			);
		}
		.bind(this));

		return (
			<div>
				{todos}
			</div>
		);
	},
	archiveToDo: function(id)
	{
		delete this.state.tasks[id];
		this.forceUpdate();
	}
});

module.exports = ToDoList;