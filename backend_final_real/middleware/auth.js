import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
  // Fix for uppercase/lowercase header issue
  // Extract token from headers-+
  // Authorization
  const header =
    req.headers["authorization"] ||
    req.headers["Authorization"] ||
    req.headers["AUTHORIZATION"];

  if (!header) {
    return res.status(401).json({ error: "Missing token" });
  }

  // Extract  token
  const token = header.startsWith("Bearer ")
    ? header.split(" ")[1]
    : header;

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });

    // Normalize users id
    req.user = {
      id: decoded.id || decoded.userId || decoded.uid,
      email: decoded.email,
    };

    if (!req.user.id) {
      return res.status(403).json({ error: "Invalid token payload" });
    }

    next();
  });
};


