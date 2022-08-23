import db from "../models"

export const class_subject = (req, res) => {
    const {
        id = "", class_id = "", subject_id = ""
    } = req.body;
    db.sequelize.query(`insert into users(id,class_id,subject_id,
        "${id}","${class_id}","${subject_id}","
 )`).then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}   