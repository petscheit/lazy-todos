import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './body.html';
import './task.js';
var homeReminderBool;

Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'click .homeReminder'(){
    console.log(homeReminderBool);
    if (homeReminderBool == null){
      homeReminderBool = true;
    } else {
      homeReminderBool = !homeReminderBool;
    }
    console.log(homeReminderBool);
  },

  'submit .new-task'(event) {
    event.preventDefault();

    // Get value from form element
    const target = event.target;
    const text = target.text.value;

    // Insert a task into the collection
    if (text != ''){
      Tasks.insert({
        text,
        createdAt: new Date(), // current time
      });
    }

    // Clear form
    target.text.value = '';
  },
});
