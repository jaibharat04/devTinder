const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send({ message: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = {
  adminAuth,
};
