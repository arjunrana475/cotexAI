import User from "../model/user.model.js";
import { getAuth } from "firebase-admin/auth";
import { app } from "../config/firebase.js";

export const login = async (req, res) => {
  try {
    const { token } = req.body;

    console.log("1. Token received:", !!token);

    const decoded = await getAuth(app).verifyIdToken(token);

    console.log("2. Firebase UID:", decoded.uid);

    let user = await User.findOne({
      firebaseUid: decoded.uid,
    });

    console.log("3. Existing user:", user);

    if (!user) {
      user = await User.create({
        firebaseUid: decoded.uid,
        name: decoded.name,
        email: decoded.email,
        avatar: decoded.picture,
      });

      console.log("4. USER CREATED:", user);
    }

    const sessionId = crypto.randomUUID();

    res.cookie("session", sessionId, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    console.log("5. Cookie created");

    return res.status(200).json(user);
  } catch (error) {
    console.error("LOGIN CONTROLLER ERROR:", error);

    return res.status(500).json({
      message: "Login controller error",
      error: error.message,
    });
  }
};
