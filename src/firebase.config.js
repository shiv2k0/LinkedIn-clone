import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJmW10M8Fkq3bX3I-9B4K1-jqbIfkLwuU",
  authDomain: "linkedin-e0f8f.firebaseapp.com",
  projectId: "linkedin-e0f8f",
  storageBucket: "linkedin-e0f8f.appspot.com",
  messagingSenderId: "415187027260",
  appId: "1:415187027260:web:d689b806bbceddad65ca39"
};


const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
export {app,auth,db}