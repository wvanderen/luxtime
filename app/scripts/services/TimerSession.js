(function() {
  function TimerSession() {
    var TimerSession = {};

    /**
    @function start
    @desc starts a new session
    */
    var start = function() {
      TimerSession.started = true;

    }

    /**
    @function reset
    @desc resets the current session
    */
    var reset = function() {
      TimerSession.remainingTime = TimerSession.sessionLength;
      TimerSession.started = false;

    }


    /**
    @desc Sets length of session
    @type {Number}
    */
    TimerSession.sessionLength = 1500000;

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



    return TimerSession;

  }

  angular
      .module('luxTime')
      .service('TimerSession', [TimerSession])
})
