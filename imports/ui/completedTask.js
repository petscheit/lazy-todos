import './completedTask.html';
import { Tasks } from '../api/tasks.js';

Template.completedTask.events({
  'click .redo'() {
    Tasks.update(this._id, {
      $set: { completed: false,
              redoAt: new Date(),
            },
    });
  },
})


