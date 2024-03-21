// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyD27jm5u_GL8GC-sUpFMAF2XvZL3cXuvr8",
  authDomain: "wellnest-app-24712.firebaseapp.com",
  projectId: "wellnest-app-24712",
  storageBucket: "wellnest-app-24712.appspot.com",
  messagingSenderId: "531761633261",
  appId: "1:531761633261:web:43dd83cab6199ed86cf9e4",
  measurementId: "G-LEH2VY8WDK"
};

initializeApp(firebaseConfig);
const auth = getAuth();

export { auth };