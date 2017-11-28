(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    Task.all = tasks;
    Task.add = function(taskName) {
      var task = {
        name: taskName,
        sentAt: firebase.database.ServerValue.TIMESTAMP,
      };

      tasks.$add(task);
    };

    return Task;
  }

  angular
      .module('luxTime')
      .service('Task', ['$firebaseArray', Task]);
})();
