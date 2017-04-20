import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';
import '../imports/api/autos.js';
Meteor.startup(() => {
  // App.accessRule('https://lazy-todo.herokuapp.com/*');
});
