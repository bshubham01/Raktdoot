import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGyIsChyGDIixIcPn9V69Lec_JKWF5cnY",
    authDomain: "raktduth.firebaseapp.com",
    projectId: "raktduth",
    storageBucket: "raktduth.appspot.com",
    messagingSenderId: "877102347109",
    appId: "1:877102347109:web:5b830d32efcd14a70e278c",
    measurementId: "G-31RLR1JW7W"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()

  // timestamp
  const timestamp = firebase.firestore.Timestamp
  export {projectFirestore,projectAuth,projectStorage,timestamp};