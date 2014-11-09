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
		var input = $(event.target).find("input");
		var value = input.val();
		input.val(new String());

		ToDoStore.unshift(value);
		this.forceUpdate();
	}
});

module.exports = ToDoList;