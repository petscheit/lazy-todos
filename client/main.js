import '../imports/ui/body.js';

Meteor.startup(function() {
  if (Meteor.isCordova) {
    ApiAIPlugin.init({
      clientAccessToken: "301cf49d730544cbb4dc70b3af10b5e2", // insert your client access key here
      lang: "en" // set lang tag from list of supported languages
      },
      function(result) { alert('connected') },
      function(error) { /* error processing */ }
    );

    ApiAIPlugin.setListeningStartCallback(function () {
      alert("listening started");
    });

    // ApiAIPlugin.setListeningFinishCallback(function () {
    //   alert("listening stopped");
    // });
  }
});

