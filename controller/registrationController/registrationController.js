const emailValidation = require("../../helpers/emailValidation.js");
const emailVerification = require("../../helpers/emailVerification.js");
const emailVerificationTemplate = require("../../helpers/emailVerificationTemplate.js");
const tokenGenerator = require("../../helpers/token.js");
const User = require("../../model/user.js");
const bcrypt = require('bcrypt');

async function registrationController(req, res) {

    let { firstName, lastName, email, password, verified } = req.body;

    if (!firstName || !lastName) {
        return res.json({ error: 'FirstName & LastName is required!' });
    }

    if (emailValidation(email)) {
        return res.json({ error: 'Email is required or Enter valid email!' });
    }

    let existingUser = await User.find({ email });

    if (existingUser.length > 0) {
        return res.json({ error: 'User already exist!' });
    }

    bcrypt.hash(password, 10, function (err, hash) {

        let user = new User({

            firstName,
            lastName,
            email,
            password: hash,
            verified

        });

        user.save();

        let jwttoken = tokenGenerator(user.email);

        emailVerification(user.email, "Email Verification", emailVerificationTemplate(jwttoken));

        res.json(user);

    });


}


module.exports = registrationController;