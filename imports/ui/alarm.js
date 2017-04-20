import { Autos } from '../api/autos.js';

import './alarm.html';

Template.alarm.events({



})

function setAlarm(time, date){
  Autos.insert({
        "alarm" : {"time" : time,
                   "date" : date,
                   "createdAt" : new Date()}
  });
}
