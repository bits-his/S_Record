const { class_subject } = require("../controllers/class_subject")


module.exports = (app) => {
    app.post("/class_subject",class_subject)
}