/**
 * @jsx React.DOM
 */

var React = require("react");

var Main = React.createClass(
{
	render: function()
	{
		return (
			<b>
				Hello World!
			</b>
		);
	}
});

React.render(<Main/>, document.getElementById("main"));