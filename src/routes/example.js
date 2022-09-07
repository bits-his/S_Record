const { example, getExample, updateExample } = require("../controllers/eample")


module.exports = (app) => {
    app.post("/example",example)
    app.get("/example/get",getExample)
    app.put("/example-update",updateExample)
}