var ToDoStore = {
	values: {
	},
	addValue: function(value)
	{
		var id = this.index++;
		this.values[id] = value;
	},
	getValue: function(id)
	{
		return this.values[id];
	},
	removeValue: function(id)
	{
		delete this.values[id];
	},
	index: 4
}

module.exports = ToDoStore;