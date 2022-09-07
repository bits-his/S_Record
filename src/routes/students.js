const { students, getStudents, updatStudent } = require("../controllers/students")


module.exports = (app) => {
    app.post("/students",students)
    app.get("/students/get",getStudents)
    app.put('/update-student',updatStudent)
}