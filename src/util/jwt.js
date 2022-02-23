const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY} = require("../config");

module.exports = {
    sign : (data) => jwt.sign(data , JWT_SECRET_KEY , {expiresIn : 12*3600}),
    verify : data => jwt.verify(data , JWT_SECRET_KEY),
};