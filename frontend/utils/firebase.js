import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "cortexai-2216c.firebaseapp.com",
  projectId: "cortexai-2216c",
  storageBucket: "cortexai-2216c.firebasestorage.app",
  messagingSenderId: "863464708503",
  appId: "1:863464708503:web:355b63347365905d0accd2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
