window.Calculator = {
	current: 0,

	add: function  () {
		var sum = this.current;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		};

		this.current = sum;
		return this.current;
	}
}