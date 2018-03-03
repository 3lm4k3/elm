import firebase from "firebase"
import "../firebase/index"
import FBSDK, { LoginManager, AccessToken } from "react-native-fbsdk"
import { GoogleSignin } from "react-native-google-signin"
const querystring = require("qs")
import { Actions } from "react-native-router-flux"

import { addBasicEntities, addSupportingEntities } from "../utils/index"


export const startFacebookLogin = () => {
  return (dispatch, getState) => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    LoginManager.logInWithReadPermissions(['public_profile', "email"]).then(
      function(result) {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          AccessToken.getCurrentAccessToken().then(accessTokenData => {            
            const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)            
            firebase.auth().signInWithCredential(credential).then(result => {
                console.log(result);
            }).catch(e => {
              console.log(e)
            })
            
          }).catch(e => {
            console.log(e)
          })
        }
      },
      function(error) {
        alert('Login fail with error: ' + error);
      }
    );
  }
}


export const startGoogleLogin = () => {
  return (dispatch, getState) => {
    
    GoogleSignin.configure({
      // iosClientId: <FROM DEVELOPER CONSOLE>, // only for iOS
    })
    .then(() => {
      GoogleSignin.signIn().then(data => {
        const credential =  firebase.auth.GoogleAuthProvider.credential(data.idToken, data.accessToken)
        return firebase.auth().signInWithCredential(credential).then(currentUser=> {
          const user  = currentUser.toJSON()
          console.log(JSON.stringify(user))
        })
      }).catch(e => {
      console.log(e)
        
      })
    }).catch(e => {
      console.log(e);
      
    })
    
  }
  
}
export const startLinkedinLogin = (token) => {
  const baseApi = 'https://api.linkedin.com/v1/people/'
  const params = [
    'first-name',
    'last-name',
    "picture-url",
    'public-profile-url',
    "email-address",
    "id",
    "formatted-name"
    // add more fields here
  ]
  const qs = {
    format: "json"
  }
  return (dispatch, getState) => {
    dispatch(setShowSpinner())
    fetch(`${baseApi}~:(${params.join(',')})?${querystring.stringify(qs)}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      dispatch(setHideSpinner())
      
      return firebase.auth().signInWithCustomToken(token).then(() => {

      })
      
    }).catch(e => {
      console.log(json)
      dispatch(setHideSpinner())      
    })
    
    
  }
}
export const startLogin = (email, password)=> {
  return (dispatch, getState) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      console.log(user)
    })
    .catch(e => {
      console.log(e.message)
    })
  }
}





setBasicEntities = (entities) => {
  return (dispatch, getState) => {
    const userId = getState().currentUser.uid
    addBasicEntities(userId, entities).then(json => {
      dispatch({
        type: "SET_BASIC_ENTITIES",
        entities: json
      })
      dispatch(setSupportingEntities(entities))
    }).catch(e => {
      alert(e)
    })
  }
}
removeBasicEntities = (entities) => {
  return {
    type: "REMOVE_BASIC_ENTITIES",
  }
}
setSupportingEntities = (entities) => {
  return (dispatch, getState) => {
    const userId = getState().currentUser.uid
    addSupportingEntities(userId, entities).then(json => {
      dispatch({
        type: "SET_SUPPORTING_ENTITIES",
        entities: json
      })
    }).catch(e => {
      alert(e)
    })
  }
}
removeSupportingEntities = (entities) => {
  return (dispatch, getState) => {
    const userId = getState().currentUser.uid
    addBasicEntities(userId, entities)
  }
}

export const startLogout = ()=> {
  return (dispatch, getState) =>{
    return firebase.auth().signOut().then(()=>{
    }).catch(e => e)
  }
}

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  user
})

export const logout = () => ({
  type: "LOGOUT"
})

export const setShowSpinner = () => {
  return {
    type: "SET_SHOW_SPINNER"
  }
}
export const setHideSpinner = () => {
  return {
    type: "SET_HIDE_SPINNER"
  }
}

