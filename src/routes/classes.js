const { classes,getClasses } = require("../controllers/classes")


module.exports = (app) => {
    app.post("/classes",classes)
    app.get("/classesget",getClasses)
}