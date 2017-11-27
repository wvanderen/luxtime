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
          TimerSession.completedSessions++;
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
    @desc Stores the length of the breakLength
    @type {Number}
    */
    TimerSession.longBreakLength = 3;

    /**
    @desc Stores time left on timer. Starts and resets to sessionLength
    @type {Number}
    */
    TimerSession.remainingTime = TimerSession.sessionLength;

    /**
    @desc holds the number of completed work sessions, resets after 4
    @type {Number}
    */
    TimerSession.completedSessions = 0;

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
      if (this.completedSessions === 4 && breakTime) {
        TimerSession.remainingTime = TimerSession.longBreakLength;
        TimerSession.type = "Time for a long break!"
        TimerSession.completedSessions = 0;
      }
      else if (breakTime) {
        TimerSession.remainingTime = TimerSession.breakLength;
        TimerSession.type = "Break Time!";
      } else {
        TimerSession.remainingTime = TimerSession.sessionLength;
        TimerSession.type = "Work Session";
        TimerSession.onBreak = false;
      }
      TimerSession.breakTime = false;
      TimerSession.started = false;
      $interval.cancel(interval);

    }








    return TimerSession;

  }

  angular
      .module('luxTime')
      .service('TimerSession', ['$interval', TimerSession])
})();
