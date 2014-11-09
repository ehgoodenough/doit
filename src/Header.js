/**
 * @jsx React.DOM
 */

var React = require("react");

var Header = React.createClass(
{
	render: function()
	{
		return (
			<h1>
				<img src="stuff/forque.png"/>
			</h1>
		);
	}
});

module.exports = Header;