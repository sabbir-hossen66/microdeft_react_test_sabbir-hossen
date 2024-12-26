// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZoofZbR8cJ4CBIt0-cnKR88_Jo0ddNFM",
  authDomain: "mirco-project.firebaseapp.com",
  projectId: "mirco-project",
  storageBucket: "mirco-project.firebasestorage.app",
  messagingSenderId: "685273769609",
  appId: "1:685273769609:web:2686ce345f5f6786c00858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;