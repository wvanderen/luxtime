(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    Task.all = tasks;
    Task.add = function(taskName) {

      tasks.$add(taskName);
    };

    return Task;
  }

  angular
      .module('luxTime')
      .service('Task', ['$firebaseArray', Task]);
})();
