require("dotenv").config();

module.exports = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
};
