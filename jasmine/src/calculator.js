window.Calculator = {
        current: 0,

        add: function() {
            var sum = this.current;
            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            };

            this.current = sum;
            return this.current;
        }, // add

        subtract: function() {
            var difference = this.current;
            for (var i = 0; i < arguments.length; i++) {
                difference -= arguments[i];
            };
            this.current = difference;
            return this.current;
        }, // subtract

        reset: function() {
                this.current = 0;
                return this.current;
            } // reset

    } // Calculator