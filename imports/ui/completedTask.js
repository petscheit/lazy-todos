import './completedTask.html';

Template.completedTask.events({
  'click .redo'() {
    Tasks.update(this._id, {
      $set: { completed: false,
              redoAt: new Date(),
            },
    });
  },
})


