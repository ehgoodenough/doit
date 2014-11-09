/**
 * @jsx React.DOM
 */

var React = require("react");
var jQuery = require("jquery");

window.$ = jQuery;
window.jQuery = jQuery;

var ToDoList = require("./ToDoList.js");
var Header = require("./Header.js");

var Main = React.createClass(
{
	render: function()
	{
		return (
			<div>
				<Header/>
				<ToDoList/>
			</div>
		);
	}
});

window.Main = React.render(<Main/>, document.getElementById("main"));