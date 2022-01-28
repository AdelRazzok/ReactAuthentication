import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD291ne6iaNec4liqRxkXrwvvIM3jfnzHs",
  authDomain: "react-auth-e3a95.firebaseapp.com",
  projectId: "react-auth-e3a95",
  storageBucket: "react-auth-e3a95.appspot.com",
  messagingSenderId: "95707904102",
  appId: "1:95707904102:web:0c3be05208b87fc43f55a7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);