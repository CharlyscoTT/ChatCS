import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6eAHXTuccf5VovD68kpEhJ92oG8YBCqY",
    authDomain: "chat-875aa.firebaseapp.com",
    databaseURL: "https://chat-875aa-default-rtdb.firebaseio.com",
    projectId: "chat-875aa",
    storageBucket: "chat-875aa.appspot.com",
    messagingSenderId: "739723371208",
    appId: "1:739723371208:web:1241054988d2bd9d91bbfd"
  };

  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);

