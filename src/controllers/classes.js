
import db from "../models"

export const classes = (req, res) => {
    const {
        create_by = "", class_name = "", created_at = ""
    } = req.body;
    db.sequelize.query(`insert into classes(class_name,created_at,create_by)
    VALUES("${class_name}","${created_at}","${create_by}")`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}

export const getClasses = (req, res) => {

    db.sequelize.query(`SELECT class_name,created_at,create_by FROM classes`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}

export const updateClasses = (req, res) => {
    const {
        create_by = "", class_name = "", created_at = "", id = ""
    } = req.body;
    db.sequelize.query(`update classes set create_by="${create_by}",class_name="${class_name}",created_at="${created_at}" where id=${id}`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}

