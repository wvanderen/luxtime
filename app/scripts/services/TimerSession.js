(function() {
  function TimerSession($interval) {
    var TimerSession = {};

    /**
    @desc stores the $interval object that counts down the timerSession
    @type {Object}
    */
    var interval;

    /**
    @function countdown
    @desc decrements the timer when active, called every 1 seconds
    */
    var countdown = function () {
      TimerSession.remainingTime--;

      if (TimerSession.remainingTime <= 0) {
        $interval.cancel(interval);
      }
    }

    /**
    @desc Sets length of session
    @type {Number}
    */
    TimerSession.sessionLength = 10;

    /**
    @desc Stores time left on timer. Starts and resets to sessionLength
    @type {Number}
    */
    TimerSession.remainingTime = TimerSession.sessionLength;

    /**
    @desc Shows whether there is currently a session running
    @type {Boolean}
    */
    TimerSession.started = false;

    /**
    @desc Describes type of session
    @type {String}
    */
    TimerSession.type = "Pomodoro";

    /**
    @function start
    @desc starts a new session
    */
    TimerSession.start = function() {
      TimerSession.started = true;
      interval = $interval(countdown, 1000);

    }

    /**
    @function reset
    @desc resets the current session
    */
    TimerSession.reset = function() {
      TimerSession.remainingTime = TimerSession.sessionLength;
      TimerSession.started = false;
      $interval.cancel(interval);

    }





    return TimerSession;

  }

  angular
      .module('luxTime')
      .service('TimerSession', ['$interval', TimerSession])
})();
