/**
 * @jsx React.DOM
 */

var React = require("react");

var ToDoList = require("./ToDoList.js");
var Header = require("./Header.js");

var Main = React.createClass(
{
	render: function()
	{
		return (
			<div>
				<Header/>
				<input type="text"/>
				<ToDoList />
			</div>
		);
	}
});

React.render(<Main/>, document.getElementById("main"));