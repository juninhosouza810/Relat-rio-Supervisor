// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ4KbeVoJqBQx8mmwly7ntTuWKiWwci54",
  authDomain: "supervisor-2bpmi.firebaseapp.com",
  projectId: "supervisor-2bpmi",
  storageBucket: "supervisor-2bpmi.firebasestorage.app",
  messagingSenderId: "318478548508",
  appId: "1:318478548508:web:9f793e3db14ec3919669d9",
  measurementId: "G-643GK1FVW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);