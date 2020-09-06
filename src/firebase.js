import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDlO7lvFJTdkBz7kQvH1QF7MKN1QQmDEc8",
  authDomain: "whats-app-clone-66cfa.firebaseapp.com",
  databaseURL: "https://whats-app-clone-66cfa.firebaseio.com",
  projectId: "whats-app-clone-66cfa",
  storageBucket: "whats-app-clone-66cfa.appspot.com",
  messagingSenderId: "596988004970",
  appId: "1:596988004970:web:a617d4b6ffd9a6ff7d9813",
  measurementId: "G-L3P9951EQ8"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}
export default db;