import jwt from "jsonwebtoken";

const JWT_SECRET = "prerit";
const JWT_EXPIRY = "7d";

const generateToken = (user) => {
  console.log("Generating token for user:", user);
  const token = jwt.sign(
    {
      email: user.email,
    },
    JWT_SECRET,
    {
      expiresIn: JWT_EXPIRY,
    }
  );
  console.log(token);
  return token;
};

export { generateToken };
