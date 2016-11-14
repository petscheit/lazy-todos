import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';
import './task.js';
var homeReminderBool; //initializing variable for event

Template.body.helpers({
  tasks() {
    return Tasks.find({completed: false}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  //logic for homeReminder setting
  'click .homeReminder'(){
    if (homeReminderBool == null){
      homeReminderBool = true;
    } else {
      homeReminderBool = !homeReminderBool;
    }
  },

  'submit .new-task'(event) {
    event.preventDefault();
    if(homeReminderBool == undefined) homeReminderBool = false;

    // Get value from form element
    const target = event.target;
    const text = target.text.value;
    const homeReminder = homeReminderBool;
    const completed = false;

    // Insert a task into the collection
    if (text != ''){
      Tasks.insert({
        completed,
        text,
        homeReminder,
        createdAt: new Date(), // current time
      });
    }

    // Clear form
    target.text.value = '';
    $(".homeReminder").prop("checked", false);
  },
});
