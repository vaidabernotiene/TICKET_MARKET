const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    // tikriname ar token yra validus
    const user = jwt.verify(token, process.env.JWT_SECRET)
    res.locals.user = user;
    // jei blogas token, nekvies next(), o parodys error
    next();
  } catch (error) {
    res.json({
      message: "Invalid token....",
    });
  }
};

module.exports = {
  verifyToken,
};
