require('dotenv').config();

module.exports= {
    PORT : process.env.PORT || 7777,
    DB_URL: {
        local : process.env.DB_URL,
        elephant : process.env.DB_URL_EL
    },
    JWT_SECRET_KEY : process.env.JWT_KEY,
    FILE_MAX_SIZE : process.env.FILE_MAX_SIZE
};