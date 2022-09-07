    import db from "../models"

    export const students = (req, res) => {
        const {
        first_name = "", last_name = "", otherr_name = "", age = "", s_class = "", created_by = "", admission_no = "",
        } = req.body;
        db.sequelize.query(`insert into students(first_name,last_name,otherr_name,age,s_class,created_by,admission_no) 
        VALUES("${first_name}","${last_name}","${otherr_name}","${age}","${s_class}","${created_by}","${admission_no}")`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
    }

    export const getStudents = (req, res) => {

        db.sequelize.query(`SELECT first_name,last_name,otherr_name,age,s_class,created_by,admission_no FROM students`)
        .then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
    }   

    export const updatStudent = (req,res)=> {
        const {
            first_name = "", last_name = "", otherr_name = "", age = "", s_class = "", created_by = "", admission_no = "",id=''
            } = req.body;
            db.sequelize.query(`update students set first_name='${first_name}',last_name="${last_name}",otherr_name="${otherr_name}",age="${age}",s_class="${s_class}",created_by="${created_by}",admission_no="${admission_no}" where id=${id}`)
            .then((results) => res.json({ sucsess: true, results: results }))
            .catch((err) => console.log(err))
    }