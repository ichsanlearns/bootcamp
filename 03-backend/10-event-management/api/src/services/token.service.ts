import jwt from "jsonwebtoken";

function getJWTSecret() {
  let jwtSecret = process.env.JWT_ACCESS_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT secret not found");
  }

  return jwtSecret;
}

export async function generateAccessToken(payload: {}) {
  const jwtSecret = getJWTSecret();

  return jwt.sign(payload, jwtSecret, { expiresIn: "5m" });
}

export async function verifyToken(token: string) {
  const jwtSecret = getJWTSecret();
  return jwt.verify(token, jwtSecret);
}

/* ---------------------------------- NOTES --------------------------------- */
// const payload = { name: "Budi Syahroni", email: "budi.syahroni@mail.com" };
// const token = jwt.sign(payload, "superdupersecret", { expiresIn: "10s" });

// console.log(token);
// console.log(jwt.decode(token));
// console.log(jwt.verify(token, "superdupersecret"));

// setTimeout(() => {
//   console.log(jwt.verify(token, "superdupersecret"));
// }, 5000);
