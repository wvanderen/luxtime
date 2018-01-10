(function () {
  function MainCtrl() {
    this.theme;

    this.setTheme = function(theme) {
      this.theme = theme;
    };


  }

  angular
      .module('luxTime')
      .controller('MainCtrl', [MainCtrl]);
})();
