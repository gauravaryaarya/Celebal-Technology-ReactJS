// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWuIfRoZ1x46B5ipH79FvapYHKyfiSe28",
  authDomain: "kanban-application-7c43a.firebaseapp.com",
  projectId: "kanban-application-7c43a",
  storageBucket: "kanban-application-7c43a.firebasestorage.app",
  messagingSenderId: "31982677018",
  appId: "1:31982677018:web:69703c4319b4acf28935a3",
  measurementId: "G-3RE011DBZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);