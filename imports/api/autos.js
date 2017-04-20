import { Mongo } from 'meteor/mongo';

//Uses GroundDB online on cordova build -> when app is launched offline version of db is loaded instantly -> no wait times till server catches up
if(Meteor.isCordova){
   autoMongo = new Mongo.Collection('autos');
   autoList = new Ground.Collection(autoMongo);
} else {
   autoList = new Mongo.Collection('autos');
}
export const Autos = autoList;
