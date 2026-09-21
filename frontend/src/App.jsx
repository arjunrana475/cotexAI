import React from "react";
// import { auth, googleProvider } from "../utils/firebase.js";
// import { signInWithPopup } from "firebase/auth";
// import api from "../utils/axios.js";
import Home from './pages/Home.jsx'
import { useEffect } from "react";
import getCurrentUser from "./features/getCurrentUser.js";

function App() {
  useEffect(() => {
    const getUser = async () => {
      await getCurrentUser();
    }
    getUser();
  }, []);

  return (
    <Home/>
  );
}

export default App;
