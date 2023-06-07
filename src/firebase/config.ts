import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaSUCM3ualdoQPaelPLODTTUCcZWz4Tjg",
  authDomain: "cristianspastry.firebaseapp.com",
  databaseURL: "https://cristianspastry-default-rtdb.firebaseio.com",
  projectId: "cristianspastry",
  storageBucket: "cristianspastry.appspot.com",
  messagingSenderId: "633593011027",
  appId: "1:633593011027:web:3cd3dae764737c539f5fa6",
  measurementId: "G-SXVNF7LNEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
 export {
  app
 }