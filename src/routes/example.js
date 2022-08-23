const { example } = require("../controllers/eample")


module.exports = (app) => {
    app.post("/example",example)
}