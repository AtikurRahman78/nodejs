function emailVerificationTemplate(token) {

    return `<img src="https://i.ibb.co/swBw4QZ/Logo.png" alt="logo"> <h1 style="font-family: Arial, Helvetica, sans-serif; font-size: 34px; color: #262626;">Please Confirm Your Email. ${token} </h1> <p style="font-family: Arial, Helvetica, sans-serif;">Welcome to Oreby Ecommerce. To continue confirm your email.</p><a style="text-decoration: none; background-color: #262626; color: #FFFFFF; font-family: Arial, Helvetica, sans-serif; padding: 15px 20px; margin-top: 10px; display: inline-block;" href="#">Confrim mail</a>`;

}


module.exports = emailVerificationTemplate;