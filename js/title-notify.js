(function(win, undef){
    var repeatableEffects = ['flash', 'scroll'];
    var titleNotify = {
        init: function (config) {
            this.interval = config.interval || 200;
            this.effect = config.effect || 'flash';
            this.title = config.title || document.title;
            this.message = config.message || this.title;
            this.counterRender = config.counterRender || '(%count%)';
            this.counter = 0;
            if ( 0 <= repeatableEffects.indexOf(this.effect)) {
                this.timer = setInterval(this.render.bind(this), 200);
            }

            document.addEventListener("visibilitychange", function(evt) {
                if (!document.hidden) {
                    clearInterval(this.timer);
                    document.title = this.title;
                }
            }.bind(this), false);
            return this;
        },
        render: function() {
            switch (this.effect) {
                case 'flash':
                    document.title = (this.title === document.title) ? this.message : this.title;
                    break;
                case 'scroll':
                    document.title = document.title.slice(1);
                    if (0 === document.title.length) {
                        document.title = this.message
                    }
                    break;
            }
        },
        counterAdd: function() {
            this.counter++;
            this.renderWithCounter();
        },
        counterSub: function() {
            this.counter--;
            this.renderWithCounter();
        },
        counterSet: function(number) {
            number = parseInt(number);
            if (!isNaN(number)) {
                this.counter = number;
                this.renderWithCounter();
            }
        },
        renderWithCounter: function() {
            var counterStr = '';
            if (0 < this.counter) {
                counterStr = this.counterRender.replace('%count%', this.counter);
            } else {
                this.counter = 0;
            }
            this.message = counterStr + ' ' + this.message;
            document.title = this.message;
        }
    };
    //Support AMD module definition
    if (typeof define === "function" && define.amd) {
        define( "titleNotify", [], function() {
            return titleNotify;
        });
    } else {
        win.titleNotify = titleNotify;
    }
}(window, undefined));