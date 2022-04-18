import firebase from "firebase/compat/app"

import "firebase/compat/auth"
import "firebase/compat/firestore"
// import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGH2FURiohZn5XN4i4LM-p-DJ01SkRTNg",
    authDomain: "biher-query.firebaseapp.com",
    projectId: "biher-query",
    storageBucket: "biher-query.appspot.com",
    messagingSenderId: "509894911493",
    appId: "1:509894911493:web:315df0fb1b2acfbb52de6c",
    measurementId: "G-LKX7GBWXZY"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig)
  const auth =firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const db = firebaseApp.firestore()
  export { auth,provider }
  export default db;