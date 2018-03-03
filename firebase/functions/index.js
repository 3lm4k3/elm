const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//
admin.initializeApp(functions.config().firebase);
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onRequest((req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref('/messages').push({original: original}).then((snapshot) => {
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    // return res.redirect(303, snapshot.ref);
    return res.json({
      message: original
    })
  });
});

exports.addSupportingEntities = functions.auth.user().onCreate((event) => {
  const user = event.data; // The Firebase user.
  admin.database().ref('/users').child(user.uid).set(basicEntities).then((snapshot) => {
    
  });

  

})

exports.getUser = functions.https.onRequest((req, res) => {
  res.json(req.body.id)
});

exports.getPost = functions.https.onRequest((req, res) => {
  res.json(req.body.id)  
});


// Listens for new messages added to /messages/:pushId/original and creates an
// uppercase version of the message to /messages/:pushId/uppercase
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original').onWrite((event) => {
  // Grab the current value of what was written to the Realtime Database.
  const original = event.data.val();
  console.log('Uppercasing', event.params.pushId, original);
  const uppercase = original.toUpperCase();
  // You must return a Promise when performing asynchronous tasks inside a Functions such as
  // writing to the Firebase Realtime Database.
  // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
  return event.data.ref.parent.child('uppercase').set(uppercase);
});



const basicEntities = {
  review: {
    reviewer: {

    },
    reviewee: {

    },
    reviewType: "",
    rating: 0,
    reviewText: ""
  },
  verificationLevel: {
    updatedOn: 0,
    clientInfo: {

    },
    formula: "",
    order: ""
  },
  subscriptionLevel: {
    text: "normal",
    updatedOn: 0,
    clientInfo: {

    },
    formula: "",
    order: ""
  },
  Skills: {
    1: {
      
    }
  },
  country: {
    text: "",
    city: "",
    updatedOn: 0,
    clientInfo: {

    }
  },
  profession: "",
  interest: {
    text: "",
    updatedOn: 0,
    clientInfo: {

    }
  },
  badges: {
    1: {
      level: 0,
      formula: "string",
      updatedOn: 0,
      clientInfo: {

      }
    }
  },
  location: {},

}