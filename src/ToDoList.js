/**
 * @jsx React.DOM
 */

var React = require("react");

var ToDo = require("./ToDo.js");
var ToDoStore = require("./ToDoStore.js");

var ToDoList = React.createClass(
{
	render: function()
	{
		var todos = ToDoStore.map(function(task, key)
		{
			return (
				<ToDo key={key} task={task}/>
			);
		}
		.bind(this));

		return (
			<div>
				<form onSubmit={this.appendToDo}>
					<input type="text"/>
				</form>
				{todos}
			</div>
		);
	},
	appendToDo: function(event)
	{
		event.preventDefault();
		console.log(event);
		ToDoStore.push("Go to sleep.");
		this.forceUpdate();
	}
});

module.exports = ToDoList;