// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXVPrywJWfM_C-6qSt5_QnAIW2hFc0DWo",
  authDomain: "fir-react-project-ea555.firebaseapp.com",
  projectId: "fir-react-project-ea555",
  storageBucket: "fir-react-project-ea555.appspot.com",
  messagingSenderId: "651648041651",
  appId: "1:651648041651:web:db42dddb21ff1b5f7a66c6",
  measurementId: "G-0PKTWRZTVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);