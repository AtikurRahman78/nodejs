const User = require("../../model/user.js");
const jwt = require('jsonwebtoken');

async function emailVerificationController(req, res){

    const { authorization } = req.headers;

    const decoded = jwt.verify(authorization, process.env.JWT_TOKEN);

    let updateUser = await User.findOneAndUpdate({ email: decoded.email }, { verified: true }, { new: true });

    res.json(updateUser);

}

module.exports = emailVerificationController;