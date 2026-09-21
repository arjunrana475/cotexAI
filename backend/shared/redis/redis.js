import Redis from "ioredis";

console.log("Redis file loaded");
console.log("REDIS_URL:", process.env.REDIS_URL);

const redis = new Redis(process.env.REDIS_URL);

redis.on("connect", () => {
  console.log("Redis connected");
});



export default redis;
