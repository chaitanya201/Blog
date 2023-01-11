const mysql = require('mysql');
const { HOST, USER, PASSWORD, DATABASE } = require('./config');
var dbConn = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE,
    port: 3306
});
// connect to database
// dbConn.connect((err) => {
//    if(err) {
//     console.log(err, "***********");
//    }
//     console.log("DB connected..");
// })

module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1234",
    DB: "blog",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

// module.exports = dbConn