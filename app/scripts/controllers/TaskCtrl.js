(function () {
  function TaskCtrl(Task) {

    this.taskData = Task.all;

    this.submit = function(taskName) {
      Task.add(this.taskName);
      this.taskName = null;
    };

    this.setCategory = function(category) {
      Task.activeCategory = category;
    };

    this.getCategory = function() {
      return Task.activeCategory;
    }

    this.getClass = function(category) {
      if (this.getCategory() === category) {
        if (category === 0) {
          return "work";
        } else if (category === 1) {
          return "learn";
        } else if (category === 2) {
          return "create";
        }
      } else {
        return "inactive";
      }
    };

  }

  angular
      .module('luxTime')
      .controller('TaskCtrl', ['Task',TaskCtrl]);
})();
