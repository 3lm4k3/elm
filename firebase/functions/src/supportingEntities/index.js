const functions = require('firebase-functions');
const admin = require('firebase-admin');

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