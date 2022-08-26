const { students, getStudents } = require("../controllers/students")


module.exports = (app) => {
    app.post("/students",students)
    app.get("/students/get",getStudents)
}