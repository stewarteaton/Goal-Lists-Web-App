import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyBGBM0yzXfEAHQlI85xsozAjCSHOUbvctI",
    authDomain: "goalcoach1-2907a.firebaseapp.com",
    databaseURL: "https://goalcoach1-2907a.firebaseio.com",
    projectId: "goalcoach1-2907a",
    storageBucket: "",
    messagingSenderId: "766336221517"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completeGoalRef = firebase.database().ref('completeGoals');