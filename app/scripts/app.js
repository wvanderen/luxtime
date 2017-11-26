(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
    .state('timer',{
      url: '/',
      controller: 'TimerCtrl as timer',
      temmplateUrl: '/templates/timer.html'
    })
  }

  angular
      .module('luxTime', ['ui.router'])
      .config(config);
})();
