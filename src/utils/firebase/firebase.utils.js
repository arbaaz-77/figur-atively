import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxDWhZwIVAk97iZiqM8UqqevZgK0sUhrE",
  authDomain: "figur-atively.firebaseapp.com",
  projectId: "figur-atively",
  storageBucket: "figur-atively.appspot.com",
  messagingSenderId: "747214544049",
  appId: "1:747214544049:web:6ee741ab2ae52ebc50d690",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid)
}
