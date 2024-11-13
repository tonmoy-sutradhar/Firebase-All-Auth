// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsJigAo8Jc0CIcyUFuN1TcR959Y_MZ0sU",
  authDomain: "fir-all-auth-5c59b.firebaseapp.com",
  projectId: "fir-all-auth-5c59b",
  storageBucket: "fir-all-auth-5c59b.firebasestorage.app",
  messagingSenderId: "454518574172",
  appId: "1:454518574172:web:c5d9f6fafe6b5fdb0daa99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
