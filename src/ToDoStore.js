var ToDoStore = {
	values: {
		1: "Call your grandma.",
		2: "Mow the lawn."
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
	index: 3
}

module.exports = ToDoStore;