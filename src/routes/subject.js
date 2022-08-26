const { subject, getSubject } = require("../controllers/subject")


module.exports = (app) => {
    app.post("/subject",subject)
    app.get("/subject/get",getSubject)
}