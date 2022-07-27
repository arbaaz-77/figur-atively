import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// firebase settings
const firebaseConfig = {
  apiKey: "AIzaSyBxDWhZwIVAk97iZiqM8UqqevZgK0sUhrE",
  authDomain: "figur-atively.firebaseapp.com",
  projectId: "figur-atively",
  storageBucket: "figur-atively.appspot.com",
  messagingSenderId: "747214544049",
  appId: "1:747214544049:web:6ee741ab2ae52ebc50d690",
};

// initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);

// google provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// setAuth
export const auth = getAuth();

// sign in options
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// setup firestore database
export const db = getFirestore();

// create user into firebase database
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

// create user using email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// sign in user using email and password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
