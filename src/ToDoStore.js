var ToDoStore = {
	values: {
		1: "Take out the trash",
		2: "Call your grandma",
		3: "Mow the lawn",
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