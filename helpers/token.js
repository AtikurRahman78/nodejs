const jwt = require('jsonwebtoken');

function tokenGenerator(data) {

    let token = jwt.sign({ email: data }, process.env.JWT_TOKEN, { expiresIn: '1h' });
    return token;

}


module.exports = tokenGenerator;