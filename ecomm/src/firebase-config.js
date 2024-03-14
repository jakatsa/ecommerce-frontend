// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB223EZ1FE_eCVnVgvEyH4VeA317bvsx30",
  authDomain: "theonlybeat-2251c.firebaseapp.com",
  projectId: "theonlybeat-2251c",
  storageBucket: "theonlybeat-2251c.appspot.com",
  messagingSenderId: "386794581579",
  appId: "1:386794581579:web:17b9bf536831cdf6e367ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
