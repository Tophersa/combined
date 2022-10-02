// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClVMiORmcfjAf7eJFET03nQAjX2tD9-h8",
  authDomain: "tocsin-app.firebaseapp.com",
  projectId: "tocsin-app",
  storageBucket: "tocsin-app.appspot.com",
  messagingSenderId: "225597764655",
  appId: "1:225597764655:web:92122a43434d879cc902da",
  measurementId: "G-H7S9B80GRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);