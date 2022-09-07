import db from "../models"

export const subject = (req, res) => {
    const {
        create_by = "", subject_name = "", created_at = ""
    } = req.body;
    db.sequelize.query(`insert into subject(subject_name,created_at,create_by)
    VALUES("${subject_name}","${created_at}","${create_by}")`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}

export const getSubject = (req, res) => {

    db.sequelize.query(`SELECT subject_name,created_at,create_by FROM subject`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}

export const updateSubject = (req, res) => {
    const {
        create_by = "", subject_name = "", created_at = "", id = ""
    } = req.body;
    db.sequelize.query(`update subject set create_by="${create_by}",subject_name="${subject_name}",created_at="${created_at}" where id=${id}`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}

