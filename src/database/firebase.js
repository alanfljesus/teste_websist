import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6gTfEaiC_J4_MpkR9ms69KpKci8TbWDs",
  authDomain: "myotherproject-5e8cd.firebaseapp.com",
  projectId: "myotherproject-5e8cd",
  storageBucket: "myotherproject-5e8cd.appspot.com",
  messagingSenderId: "654119453195",
  appId: "1:654119453195:web:d5f217244e95e7f8bafd0e"
};

let fireDb = firebase.initializeApp(firebaseConfig)

export default fireDb