/**
 * @jsx React.DOM
 */

var React = require("react");

var ToDo = require("./ToDo.js");
var Header = require("./Header.js");

var Main = React.createClass(
{
	render: function()
	{
		return (
			<div>
				<Header/>
				<input type="text"/>
				<ToDo task="Take out the trash!"/>
				<ToDo task="Call your grandma!"/>
			</div>
		);
	}
});

React.render(<Main/>, document.getElementById("main"));