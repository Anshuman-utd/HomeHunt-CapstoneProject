// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlK_Ko7nulDYdWEozZ423Xyk_8QwOvzGs",
  authDomain: "homehunt-ae69a.firebaseapp.com",
  projectId: "homehunt-ae69a",
  storageBucket: "homehunt-ae69a.appspot.com", // <-- fix this URL
  messagingSenderId: "665266111866",
  appId: "1:665266111866:web:69e85cd4aefdc699f642c3",
  measurementId: "G-BEGE52CHP5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
