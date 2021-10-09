import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXVPrywJWfM_C-6qSt5_QnAIW2hFc0DWo",
  authDomain: "fir-react-project-ea555.firebaseapp.com",
  projectId: "fir-react-project-ea555",
  storageBucket: "fir-react-project-ea555.appspot.com",
  messagingSenderId: "651648041651",
  appId: "1:651648041651:web:db42dddb21ff1b5f7a66c6",
  measurementId: "G-0PKTWRZTVD"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore();