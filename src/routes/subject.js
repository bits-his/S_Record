const { subject } = require("../controllers/subject")


module.exports = (app) => {
    app.post("/subject",subject)
}