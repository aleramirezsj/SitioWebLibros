  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDaXt4dIJT9mW3Fl_gz5FDmiaZeS9nJkII",
    authDomain: "biblio2023-ccb07.firebaseapp.com",
    projectId: "biblio2023-ccb07",
    storageBucket: "biblio2023-ccb07.appspot.com",
    messagingSenderId: "805193142147",
    appId: "1:805193142147:web:025915bb4335a7c25e30b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);