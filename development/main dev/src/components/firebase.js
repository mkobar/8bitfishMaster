import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
// import admin from "firebase-admin";
// const admin = require('firebase-admin');

const firebaseConfig = {
  apiKey: "AIzaSyBLkIF8GZVaLTlhZt-7oSDJcrMAI4BH80Q",
  authDomain: "bitfish-48620.firebaseapp.com",
  projectId: "bitfish-48620",
  storageBucket: "bitfish-48620.appspot.com",
  messagingSenderId: "637482630141",
  appId: "1:637482630141:web:6706caeda3774cfd6ff794",
  measurementId: "G-Y9HLW62J0H",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
// firebase.analytics();
