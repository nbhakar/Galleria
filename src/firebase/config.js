import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC4NgkAbmWJXBh9_ckgVrTaFCl1JfmREYM",
  authDomain: "ninja-firegram-2b3dc.firebaseapp.com",
  projectId: "ninja-firegram-2b3dc",
  storageBucket: "ninja-firegram-2b3dc.appspot.com",
  messagingSenderId: "987745385724",
  appId: "1:987745385724:web:38a4a7d000a6f05b7aeb79"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };