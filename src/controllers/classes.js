    

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

export const getSubject = (req, res) => {   
     
    db.sequelize.query(`SELECT class_name,created_at,create_by FROM subject`)
        .then((results) => res.json({ sucsess: true, results: results }))   
        .catch((err) => console.log(err))
}   

