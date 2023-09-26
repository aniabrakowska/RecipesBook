// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbjnjNbYV9VUu3mYKmcQ_IL9ckSCJGgPw",
  authDomain: "przepisnik-1.firebaseapp.com",
  projectId: "przepisnik-1",
  storageBucket: "przepisnik-1.appspot.com",
  messagingSenderId: "30591021459",
  appId: "1:30591021459:web:077413ea909332a7f6b866"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();