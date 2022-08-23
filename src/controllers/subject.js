import db from "../models"

export const subject = (req, res) => {
    const {
        id = "", subject_name = "", created_at = ""
    } = req.body;
    db.sequelize.query(`insert into users(id,subject_name,created_at,
        "${id}","${subject_name}","${created_at}","
 )`).then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}   