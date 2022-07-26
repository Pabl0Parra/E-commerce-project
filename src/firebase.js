import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD4_R-CwLdqEXatT8VWUVzHomfOZczpfgk",
  authDomain: "en-ascuas-forja.firebaseapp.com",
  projectId: "en-ascuas-forja",
  storageBucket: "en-ascuas-forja.appspot.com",
  messagingSenderId: "420310837333",
  appId: "1:420310837333:web:9e7655e932d1503e27ccdc",
  measurementId: "G-MSCCPPQ79G",
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// export
export const auth = getAuth(app);

export const googleAuthProvider = new GoogleAuthProvider();
