import redis from "../../shared/redis/redis.js";

const protect = async (req, res, next) => {
  try {
    const sessionId = req.cookies?.session;

    console.log("SESSION COOKIE:", sessionId);

    if (!sessionId) {
      return res.status(400).json({
        message: "User unauthorized",
      });
    }

    const key = `session-${sessionId}`;

    console.log("REDIS KEY:", key);

    const session = await redis.get(key);

    console.log("REDIS SESSION:", session);

    if (!session) {
      return res.status(400).json({
        message: "session expired",
      });
    }

    req.user = JSON.parse(session);

    next();
  } catch (e) {
    console.error("PROTECT ERROR:", e);

    return res.status(500).json({
      message: `protect error : ${e.message}`,
    });
  }
};

export default protect;
