const { classes } = require("../controllers/classes")


module.exports = (app) => {
    app.post("/classes",classes)
}