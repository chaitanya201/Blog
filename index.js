const app = require("./app");
const { PORT, HOST, USER, PASSWORD, DATABASE } = require("./config/config");
const dbConfig = require('./config/dbConfig')

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})