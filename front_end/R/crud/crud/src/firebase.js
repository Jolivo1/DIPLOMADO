import firebase from "firebase/app";
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyAzKsSxTygHV0rIZryI2gB4ohRQmq2DvIU",
  authDomain: "crudfire-1c60c.firebaseapp.com",
  projectId: "crudfire-1c60c",
  storageBucket: "crudfire-1c60c.appspot.com",
  messagingSenderId: "935539067319",
  appId: "1:935539067319:web:6ea573e172e5e22e488032"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase};