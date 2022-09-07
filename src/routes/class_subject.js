const { class_subject, getClass_subject } = require("../controllers/class_subject")


module.exports = (app) => {
    app.post("/class_subject",class_subject)
    app.get("/class_subject/get", getClass_subject)
}