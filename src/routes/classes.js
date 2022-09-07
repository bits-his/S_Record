const { classes, updateClasses, getClasses } = require("../controllers/classes")


module.exports = (app) => {
    app.post("/classes",classes)
    app.get("/classes/get",getClasses)
    app.put("/update-classes", updateClasses)
}