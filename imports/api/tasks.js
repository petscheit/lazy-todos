import { Mongo } from 'meteor/mongo';

if(Meteor.isCordova){
   tasksMongo = new Mongo.Collection('tasks');
   tasksList = new Ground.Collection(tasksMongo);
} else {
   tasksList = new Mongo.Collection('tasks');
}

export const Tasks = tasksList;
