const functions = require('firebase-functions');
const admin = require('firebase-admin');

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