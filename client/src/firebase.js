import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC8-oh7hUVw0O-qfGukqDg0_vxx03mR1WM",
  authDomain: "netflix-5d99d.firebaseapp.com",
  projectId: "netflix-5d99d",
  storageBucket: "netflix-5d99d.appspot.com",
  messagingSenderId: "284297528992",
  appId: "1:284297528992:web:3fbdd0c71eb48502b26bc5",
  measurementId: "G-NZW4FGKN40"
};


firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
