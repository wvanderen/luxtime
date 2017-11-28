(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'TimerCtrl as timer',
        templateUrl: '/templates/landing.html'
      });
  }

  angular
      .module('luxTime', ['ui.router', 'firebase'])
      .config(config);

})();
