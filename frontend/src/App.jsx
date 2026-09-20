import React from "react";
import { auth, googleProvider } from "../utils/firebase.js";
import { signInWithPopup } from "firebase/auth";
import api from "../utils/axios.js";

function App() {
  const handleLogin = async (token) => {
    try {
      const response = await api.post("/auth/login", {
        token: token,
      });

      console.log("Backend response:", response.data);
    } catch (e) {
      console.error("Backend error:", e.response?.data || e.message);
    }
  };

  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);

      const token = await data.user.getIdToken();

      console.log("Firebase token:", token);

      await handleLogin(token);

      console.log("Firebase user:", data.user);
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <button className="w-50 h-24 bg-white" onClick={googleLogin}>
        Continue with Google
      </button>
    </div>
  );
}

export default App;
