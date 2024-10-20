import jwt from "jsonwebtoken";

const secret = "your_jwt_secret_key";

export const generateToken = (userId: string) => {
  return jwt.sign({ userId }, secret, { expiresIn: "7d" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};
