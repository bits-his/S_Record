import db from "../models"

export const classes = (req, res) => {
    const {
        id = "", class_name = "", created_at = "", create_by = ""
    } = req.body;
    db.sequelize.query(`insert into users(id,class_name,created_at,create_by,
        "${id}","${class_name}","${created_at}","${create_by}","
 )`).then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}   