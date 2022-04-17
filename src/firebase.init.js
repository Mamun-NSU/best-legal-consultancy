// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_Vuj8e7ZHD5BsTTzfop-bnDFtFzKmDKY",
  authDomain: "independent-service-prov-66d1c.firebaseapp.com",
  projectId: "independent-service-prov-66d1c",
  storageBucket: "independent-service-prov-66d1c.appspot.com",
  messagingSenderId: "380486879113",
  appId: "1:380486879113:web:2c84f7ec494434ba7d8358",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
