import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBXr2jI-V5yMGK1qjciLF8C0GeSETYkc9c",
    authDomain: "fir-15a22.firebaseapp.com",
    databaseURL: "https://fir-15a22-default-rtdb.firebaseio.com",
    projectId: "fir-15a22",
    storageBucket: "fir-15a22.appspot.com",
    messagingSenderId: "147024465048",
    appId: "1:147024465048:web:b5d30f823efca7c16f94ed",
    measurementId: "G-Y09T5KTQTN"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;