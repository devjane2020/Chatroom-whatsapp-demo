import firebase from "firebase";


 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSb8VTO5pRTW_MsVCW3ZMG086JOZmYc3c",
  authDomain: "chatapp-bf5ba.firebaseapp.com",
  projectId: "chatapp-bf5ba",
  storageBucket: "chatapp-bf5ba.appspot.com",
  messagingSenderId: "156660766627",
  appId: "1:156660766627:web:73e78b7ed0d6565cc9ac16",
  measurementId: "G-115WGYS5K7"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new  firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;