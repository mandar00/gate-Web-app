import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/database'
import "firebase/firestore"
import "firebase/storage"

const Config={
    apiKey: "AIzaSyAduVEyFcx7TKj3a_vkOtW236yhPfsCWwU",
    authDomain: "gatewebapp.firebaseapp.com",
    projectId: "gatewebapp",
    storageBucket: "gatewebapp.appspot.com",
    messagingSenderId: "112039691155",
    appId: "1:112039691155:web:f5d529f2af28ec381e9e66"
  }

const app= firebase.initializeApp(Config);
export const  auth =app.auth();
export  var db=firebase.firestore();
export const storage=firebase.storage();