(function() {
  function TimerSession($interval, Task) {
    var TimerSession = {};

    /**
    // @desc stores the buzz object for the ding sound
    // @type {BuzzObject}
    // */
    // var ding = new buzz.sound('assets/sounds/ding', {
    //   formats: ['wav'],
    //   preload: true
    // });

    /**
    @desc stores the buzz object for the spiderDance sound
    @type {BuzzObject}
    */
    var spiderDance = new buzz.sound('assets/sounds/spiderdance', {
      formats: ['mp3'],
      preload: true
    });


    /**
    @desc stores the buzz object for the allWeEverKnew sound
    @type {BuzzObject}
    */
    var allWeEverKnew = new buzz.sound('assets/sounds/allweeverknew', {
      formats: ['mp3'],
      preload: true
    });


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

      if (TimerSession.remainingTime <= 1) {



        //Add one to day count for categroy
        if (TimerSession.onBreak) {
          allWeEverKnew.pause();
          spiderDance.play();
          TimerSession.onBreak = false;
          TimerSession.reset();
          TimerSession.started = true;
          TimerSession.remainingTime = TimerSession.sessionLength;
          TimerSession.type = "Work Session";
          TimerSession.onBreak = false;
          interval = $interval(countdown, 1000);
        } else {
          spiderDance.pause();
          allWeEverKnew.play();
          TimerSession.completedSessions++;
          TimerSession.onBreak = true;
          TimerSession.breakTime = true;
          TimerSession.remainingTime = TimerSession.breakLength;
          TimerSession.type = "Break Time!";
          TimerSession.started = true;
          interval = $interval(countdown, 1000);
        }
      }

    }

    /**
    @desc Sets length of session
    @type {Number}
    */
    TimerSession.sessionLength = 5400;

    /**
    @desc Stores the length of the breakLength
    @type {Number}
    */
    TimerSession.breakLength = 1200;

    /**
    @desc Stores the length of the breakLength
    @type {Number}
    */
    TimerSession.longBreakLength = 1800;

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
    @desc Determines whether the timer will continue automatically or a button needs to be pressed
    @type {Boolean}
    */
    TimerSession.skipBreaks = true;

    /**
    @desc Describes type of session and displays to user
    @type {String}
    */
    TimerSession.type = "Uptime";

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
    @desc Determines the option for long breaks are displayed
    @type {Boolean}
    */
    TimerSession.longBreaks = false;

    /**
    @function start
    @desc starts a new session
    */
    TimerSession.start = function() {
      TimerSession.started = true;
      interval = $interval(countdown, 1000);

    }


        /**
        @function pauseMusic
        @desc Turns off the music without disrupting the timer
        */
        TimerSession.pauseMusic = function() {
          allWeEverKnew.stop();
          spiderDance.stop();

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
      } else if (breakTime) {
        TimerSession.remainingTime = TimerSession.breakLength;
        TimerSession.type = "Downtime!";
      } else if (this.completedSessions === 4 && this.longBreaks) {
        TimerSession.completedSessions = 0;
        TimerSession.remainingTime = TimerSession.sessionLength;
      } else {
        TimerSession.remainingTime = TimerSession.sessionLength;
        TimerSession.type = "Uptime!";
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
      .service('TimerSession', ['$interval', 'Task', TimerSession])
})();
