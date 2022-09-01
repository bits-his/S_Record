import db from "../models"

export const example = (req, res) => {
    const {
        user_name = "", email = "", fisrt_name = "", last_name = "", phone = "", country = "", state = "", password = "", creted_at = "", school_name = "", school_moto = "", school_logo = "", school_email = "", school_adrdress = "", signature = ""
    } = req.body;
    console.log(req.body)
    db.sequelize.query(`insert into users(user_name,email,fisrt_name,last_name,phone,country,state,password,creted_at,school_name,school_moto,school_logo,school_email,school_adrdress,signature)
    values("${email}","${user_name}","${fisrt_name}","${last_name}","${phone}","${country}","${state}","${password}","${creted_at}","${school_name}","${school_moto}","${school_logo}","${school_email}","${school_adrdress}","${signature}")`)
        .then((results) => res.json({ success: true, results: results }))
        .catch((err) => console.log(err))
}   