// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDpfkUtMw9H7volRF6xMWFvIU7G7AVxXs",
  authDomain: "todolist-a1637.firebaseapp.com",
  projectId: "todolist-a1637",
  storageBucket: "todolist-a1637.appspot.com",
  messagingSenderId: "257282087440",
  appId: "1:257282087440:web:59c6736bb0a2df8ffd8895",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
