import db from "../models"

export const class_subject = (req, res) => {
    const {
         class_id = "", subject_id = ""
    } = req.body;
    db.sequelize.query(`insert into class_subject(class_id,subject_id)
    VALUES("${class_id}","${subject_id}")`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}   

export const getClass_subject = (req, res) => {   
     
    db.sequelize.query(`SELECT class_id,subject_id FROM class_subject`)
        .then((results) => res.json({ sucsess: true, results: results }))   
        .catch((err) => console.log(err))
}   

