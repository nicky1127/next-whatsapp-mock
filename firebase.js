import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLYY6AwKLkDjY_KegcsSQNLmF23uJz-9U",
  authDomain: "whatsapp-2-5e9ce.firebaseapp.com",
  projectId: "whatsapp-2-5e9ce",
  storageBucket: "whatsapp-2-5e9ce.appspot.com",
  messagingSenderId: "841053988880",
  appId: "1:841053988880:web:709b9f5a25d303c853c295",
};

// const app = !(firebase.apps && firebase.apps.length)
//   ? initializeApp(firebaseConfig)
//   : firebase.app();

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const dbV8 = firebase.initializeApp(firebaseConfig).firestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, dbV8 };
