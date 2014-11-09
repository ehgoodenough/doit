/**
 * @jsx React.DOM
 */

var React = require("react");
var ToDo = require("./ToDo.js");

var Main = React.createClass(
{
	render: function()
	{
		return (
			<div>
				<h1>doit</h1>
				<input type="text"/>
				<ToDo task="Take out the trash!"/>
				<ToDo task="Call your grandma!"/>
			</div>
		);
	}
});

React.render(<Main/>, document.getElementById("main"));