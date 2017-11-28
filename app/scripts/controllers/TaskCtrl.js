(function () {
  function TaskCtrl(Task) {

    this.taskData = Task.all;

    this.submit = function(taskName) {
      Task.add(this.taskName);
      this.taskName = null;
    };

  }

  angular
      .module('luxTime')
      .controller('TaskCtrl', ['Task',TaskCtrl]);
})();
