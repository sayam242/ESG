const adminMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ success: false, message: "Access denied. No token provided." });
  }

  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ success: false, message: "Access denied. Admins only." });
  }

  next();
};

export default adminMiddleware;
