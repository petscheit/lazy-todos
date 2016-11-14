import { Mongo } from 'meteor/mongo';

//Uses GroundDB online on cordova build -> when app is launched offline version of db is loaded instantly -> no wait times till server catches up
if(Meteor.isCordova){
   tasksMongo = new Mongo.Collection('tasks');
   tasksList = new Ground.Collection(tasksMongo);
} else {
   tasksList = new Mongo.Collection('tasks');
}
export const Tasks = tasksList;
