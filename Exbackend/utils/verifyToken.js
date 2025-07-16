import jwt from "jsonwebtoken";

const verifyJwt = (token) => {
  // console.log("1");
  try {
    // console.log("Veryfying token");
    return jwt.verify(token, "prerit");
  } catch (error) {
    // console.log("in catch 1");
    throw error;
  }
};

export { verifyJwt };
