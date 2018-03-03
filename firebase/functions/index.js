const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//
admin.initializeApp(functions.config().firebase);


exports.addBasicEntities = functions.https.onRequest((req, res) => {
  let { userId, country, profession, interests } = req.body
  basicEntities = {
    country: {
      city: {},
      text: country,
      updatedOn: {},
      clientInfo: { }
    },
    profession: {
      text: profession,
      updatedOn: { },
      clientInfo: { }
    },  
    jobs: {
      updatedOn: { },
      clientInfo: { }
    },
    interests: {
      list: interests,
      updatedOn: { },
      clientInfo: { }
    },
    review: {
      reviewer: { },
      reviewee: { },
      reviewType: "",
      rating: 0,
      reviewText: ""
    },
    verificationLevel: {
      updatedOn: 0,
      clientInfo: { },
      formula: "",
      order: ""
    },
    subscriptionLevel: {
      text: "normal",
      updatedOn: 0,
      clientInfo: { },
      formula: "",
      order: ""
    },
    Skills: {
      1: { }
    },
    about: {
      text: "",
      updatedOn: 0,
      clientInfo: { },
    },
    badges: {
      1: {
        level: 0,
        formula: "",
        updatedOn: 0,
        clientInfo: { }
      }
    },
    location: {},

  }

  admin.database().ref('/users').child(userId).set(basicEntities).then(() => {
    return res.end()
  })
  .catch(e => {
    return res.status(400).json(e.message)
  })


})

exports.addSupportingEntities = functions.https.onRequest((req, res) => {
    const { userId, basicEntities } = req.body
    admin.firestore().collection("cities").doc("LA").set({
      name: "Los Angeles",
      state: "CA",
    })
    .then(function() {
        return res.end("Document successfully written!");
    })
    .catch(function(error) {
        return res.error("Error writing document: ", error.message);
    });

})

exports.getUser = functions.https.onRequest((req, res) => {
  
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



