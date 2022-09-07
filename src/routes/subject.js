const { subject, getSubject, updateSubject } = require("../controllers/subject")


module.exports = (app) => {
    app.post("/subject",subject)
    app.get("/subject/get",getSubject)
    app.put("/update-subject/",updateSubject)
}