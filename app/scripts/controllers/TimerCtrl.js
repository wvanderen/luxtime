(function () {
  function TimerCtrl(TimerSession) {
    this.timerSession = TimerSession;

  }


  angular
      .module('luxTime')
      .controller('TimerCtrl', ['TimerSession', TimerCtrl]);
})();
