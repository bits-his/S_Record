import db from "../models"

export const students = (req, res) => {
    const {
        id = "", user_name = "", last_name = "", otherr_name = "", age = "", clases = "", created_by = "", admission_no = "",
    } = req.body;
    db.sequelize.query(`insert into users(id,user_name,last_name,otherr_name,age,clases,created_by,
    admission_no
        "${id}","${user_name}","${last_name}","${otherr_name}","${age}","${clases}","${created_by}
    ","${admission_no}","
 )`).then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}   