import { Autos } from '../api/autos.js';
import './speech.html';


Template.speech.events({

  'click .speech-button'(){
    try {
      ApiAIPlugin.requestText(
        {
          query: "set my alarm for 7am tomorrow"
        },
        function (response) {
          // alert(JSON.stringify(response));
          const time = response['result']['parameters']['time'];
          const date = response['result']['parameters']['date'];
          const createdAt = new Date();
          Autos.insert({
              'alarm' : {time, date, createdAt}
          });
        },
        function (error) {
          // place your error processing here
          alert(error);
        });
    } catch (e) {
      alert(e);
    }
  },

  'click .voice-button'(){
    console.log('here')
    try {
      ApiAIPlugin.requestVoice(
        { lang:"en" },
        function (response) {
          console.log(response)
          if (response['score'] > 0.6){
            var time = response['result']['parameters']['time']
            var date = response['result']['parameters']['date']
            alert(response['result']['action'])
            alert(response['result']['fulfillment']['speech'])
            setAlarm(time, date);
          }
          alert(JSON.stringify(response));
        },
        function (error) {
          // place your error processing here
          alert(error);
        });
    } catch (e) {
      alert(e);
    }
  }
})
