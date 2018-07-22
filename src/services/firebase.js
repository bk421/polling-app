// ./src/services/firebase.js
import firebase from "firebase"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyDwkU5eFmZCfTzwYoAGQ4NnyiS6uuyJ07o",
  authDomain: "polling-app-25af2.firebaseapp.com",
  databaseURL: "https://polling-app-25af2.firebaseio.com",
  projectId: "polling-app-25af2",
  storageBucket: "polling-app-25af2.appspot.com",
  messagingSenderId: "997339855661"
}

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  get polls() {
    return this.store().collection('polls');
  }
}

export default new Firebase();
