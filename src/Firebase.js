import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhoYS8Q4C6CpRpzCHULzvlERzXd91Sykc",
  authDomain: "clone-1add4.firebaseapp.com",
  projectId: "clone-1add4",
  storageBucket: "clone-1add4.appspot.com",
  messagingSenderId: "858844626161",
  appId: "1:858844626161:web:863b2823733a47f5bb3d50",
  measurementId: "G-SELGKW8N94"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };