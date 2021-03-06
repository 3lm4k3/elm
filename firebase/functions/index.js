const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//
admin.initializeApp(functions.config().firebase);


exports.addBasicEntities = functions.https.onRequest((req, res) => {
  let { userId, country, profession, interests } = req.body
  const basicEntities = {
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
    return res.json(basicEntities)
  })
  .catch(e => {
    return res.status(400).json(e.message)
  })


})

exports.addSupportingEntities = functions.https.onRequest((req, res) => {
    const { userId, basicEntities } = req.body
    const userModel = customizeProfile(basicEntities.profession.text)
    admin.firestore().collection("users").doc(userId).set(userModel)
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


const customizeProfile = (profession) => {
  switch(profession) {
    case "supplier":
      return ({
        products: 3,
        posts: [],
        bookmarks: [],
    })
    case "normal":
      return ({
        posts: [],
        bookmarks: []
      })
    case "engineer":
      return ({
        projects: [],
        posts: [],
        bookmarks: []
      })
    case "contractor":
      return ({
      projects: [],
      posts: [],
      bookmarks: []
    })
  }
}


