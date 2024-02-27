// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP3ZgNOM5q86Ux5x8-qsD4fm6DE1Bq6Ec",
  authDomain: "chat-app-2-6a817.firebaseapp.com",
  projectId: "chat-app-2-6a817",
  storageBucket: "chat-app-2-6a817.appspot.com",
  messagingSenderId: "83557517707",
  appId: "1:83557517707:web:80230e9efec5c1588d878e",
  measurementId: "G-NCV28LLKTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
