(function() {
  function Task($firebaseArray) {
    var Task = {};
    var ref = firebase.database().ref().child("tasks");
    var tasks = $firebaseArray(ref);

    Task.activeCategory;

    Task.all = tasks;
    Task.add = function(taskName) {
      var task = {
        name: taskName,
        sentAt: firebase.database.ServerValue.TIMESTAMP,
        category: Task.activeCategory
      };

      tasks.$add(task);
    };

    return Task;
  }

  angular
      .module('luxTime')
      .service('Task', ['$firebaseArray', Task]);
})();
