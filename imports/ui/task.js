import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .complete'() {
    Tasks.update(this._id, {
      $set: {
        completed: true,
        completedAt: new Date(),
      },
    });
  },
  'click .edit-task-button'(){
    console.log('here');
    // $(this).closest('.text').removeAttr('readonly').focus();
  }
});
