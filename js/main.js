(() => {
    class Clock {
        constructor( clock ) {
            this.clock = clock;

            this.clockHour = clock.querySelector('.clock__hour');
            this.clockMin = clock.querySelector('.clock__min');
            this.clockSec = clock.querySelector('.clock__sec');
        }

        init() {
            this.setDate();
        }

        setDate() {
            this.date = new Date();
            this.hour = this.date.getHours();
            this.min = this.date.getMinutes();
            this.sec = this.date.getSeconds();

            this.setDegrees();        

            setTimeout( () => {this.setDate() }, 1000 );      
        }

        setDegrees() {
            this.hourDegrees = ((this.hour / 12) * 360) + 90;
            this.minDegrees = ((this.min / 60) * 360) + 90;
            this.secDegrees = ((this.sec / 60) * 360) + 90;

            this.transformClock();
        }

        transformClock() {
            this.clockHour.style.transform = `rotate(${this.hourDegrees}deg)`;
            this.clockMin.style.transform = `rotate(${this.minDegrees}deg)`;
            this.clockSec.style.transform = `rotate(${this.secDegrees}deg)`;
        }

    }

  const clock = new Clock( document.querySelector('.clock') );

  clock.init();
})();