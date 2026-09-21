import React from "react";
import { auth, googleProvider } from "../../utils/firebase.js";
import { signInWithPopup } from "firebase/auth";
import api from "../../utils/axios.js";
import { FcGoogle } from "react-icons/fc";

export default function Home() {

    const handleLogin = async (token) => {
      try {
        const response = await api.post("/api/auth/login", {
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
      <div className="h-screen  flex bg-[#0d0f14] text-white overflow-hidden">

          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
            <div className="w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2xl p-7 flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h2 className="text-[17px] font-semibold text-slate-100 tracking-tight">
                  Welcome to CortexAI
                </h2>
                <p className="text-[13px] text-slate-500">
                  Please login to continue using the app.
                </p>
              </div>

              <button
                className="w-full flex items-center justify-center gap-3 py-[11px] rounded-xl text-sm font-medium text-black/90 bg-white hover:bg-gray-200  transition-all duration-150 cursor-pointer"
                onClick={googleLogin}
              >
                <FcGoogle size={15} />
                Continue With Google
              </button>
            </div>
          </div>
      </div>
    );
}
