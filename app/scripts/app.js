(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('timer', {
        url: '/timer',
        controller: 'TimerCtrl as timer',
        temmplateUrl: '/templates/timer.html'
      })

      .state('landing', {
        url: '/',
        controller: 'TimerCtrl as timer',
        templateUrl: '/templates/landing.html'
      });
  }

  angular
      .module('luxTime', ['ui.router'])
      .config(config);

})();
