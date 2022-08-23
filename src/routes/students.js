const { students } = require("../controllers/students")


module.exports = (app) => {
    app.post("/students",students)
}