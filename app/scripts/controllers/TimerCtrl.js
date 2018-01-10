(function () {
  function TimerCtrl(TimerSession) {
    this.timerSession = TimerSession;
    this.sessionLength;
    this.breakLength;
    this.longBreaks;
    this.longBreakLength;

    this.submit = function() {
      //Set session length
      if (this.sessionLength) {
        TimerSession.sessionLength = (this.sessionLength * 60);
      }
      //Set break length
      if (this.breakLength) {
        TimerSession.breakLength = (this.breakLength * 60);
      }
      if (this.longBreakLength) {
        TimerSession.longBreakLength = (this.longBreakLength * 60);
      }
      //Sets long break Boolean
      TimerSession.longBreaks = this.longBreaks;

    };
  }


  angular
      .module('luxTime')
      .controller('TimerCtrl', ['TimerSession', TimerCtrl]);
})();
