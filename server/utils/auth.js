const jwt = require("jsonwebtoken");



//keep secret hidden
const secret = process.env.COOKIE;
const expiration = "2h";

module.exports = {
    authMiddleware: function ({ username, email, _id }) {
    const userInfo = { username, email, _id };

    return jwt.sign({ data: userInfo }, secret, { expiresIn: expiration });
  },

  auth: function ({ req }) {
    //depends on how request is sent
    let token = req.body.token || req.query.token || req.headers.authorization;

    //removes "bearer"
    if (req.headers.authorization) token = token.split(" ").pop().trim();
    // only moves on if there is any value in token
    if (!token) {
      return req;
    }

    try {
      //verify method checks if secret matches the secret from .sign method
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("invalid token");
    }
    return req;
  },
};
