import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './body.html';
import './task.js';
import './completedTask.js';
var homeReminderBool; //initializing variable for event

Template.body.helpers({
  tasks() {
    return Tasks.find({completed: false}, { sort: { createdAt: -1 } });
  },

  completedTasks() {
    var dbEntries = Tasks.find({completed: true}, { sort: { completedAt: -1 } }).fetch();
    //iterates over db query and uses results to calculate h, day or months when task was completed.
    _.each(dbEntries, function(entry){
      var timeDifference = (new Date().getTime() - entry.completedAt.getTime())
      if (timeDifference <  86400000){
        entry.completedAt = Math.round(timeDifference/(60*60*1000)) + "h" // hours
      } else if (timeDifference < 2592000000){
        entry.completedAt = Math.round(timeDifference/(24*60*60*1000)) + "d" // Days
      } else {
        entry.completedAt = Math.round(timeDifference/(30*24*60*60*1000)) + "m" // Months
      }
    })
    return dbEntries;
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
