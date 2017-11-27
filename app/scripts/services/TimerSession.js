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
        if (TimerSession.onBreak) {
          TimerSession.onBreak = false;
        } else {
          TimerSession.onBreak = true;
          TimerSession.breakTime = true;
        }
        $interval.cancel(interval);
      }
    }

    /**
    @desc Sets length of session
    @type {Number}
    */
    TimerSession.sessionLength = 1;

    /**
    @desc Stores the length of the breakLength
    @type {Number}
    */
    TimerSession.breakLength = 2;

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
    @desc Describes type of session and displays to user
    @type {String}
    */
    TimerSession.type = "Work Session";

    /**
    @desc Describes whether the user is on break
    @type {Boolean}
    */
    TimerSession.onBreak = false;

    /**
    @desc Determines whether to show option to take break to user
    @type {Boolean}
    */
    TimerSession.breakTime = false;

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
    TimerSession.reset = function(breakTime) {
      if (breakTime) {
        TimerSession.remainingTime = TimerSession.breakLength;
        TimerSession.type = "Break Time!";
        TimerSession.breakTime = false;
      } else {
        TimerSession.remainingTime = TimerSession.sessionLength;
        TimerSession.type = "Work Session"
      }
      TimerSession.started = false;
      $interval.cancel(interval);

    }








    return TimerSession;

  }

  angular
      .module('luxTime')
      .service('TimerSession', ['$interval', TimerSession])
})();
