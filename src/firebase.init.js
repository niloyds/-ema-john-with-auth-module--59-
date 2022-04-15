// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5SBGpGheMfoAolAYb-JMN5QRmuss9gKY",
  authDomain: "module-48-53-56-emazon-4fe32.firebaseapp.com",
  projectId: "module-48-53-56-emazon-4fe32",
  storageBucket: "module-48-53-56-emazon-4fe32.appspot.com",
  messagingSenderId: "843896839702",
  appId: "1:843896839702:web:df2ce44b285db7c70c1f37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;