import db from "../models"

export const example = (req, res) => {
    const {
        id = "", user_name = "", email = "", fisrt_name = "", last_name = "", country = "", state = "", password = "",
        creted_at = "", school_name = "", school_moto = "", school_logo = "", school_email = "", school_adrdress = "", signature = ""
    } = req.body;
    db.sequelize.query(`insert into users(id,user_name,email,fisrt_name,last_name,country,state,
    password,creted_at,school_name,school_moto,school_logo,school_email,school_adrdress,signature
    )values(
        "${id}","${user_name}","${email}","${fisrt_name}","${last_name}","${country}","${state}
    ","${password}","${creted_at}","${school_name}","${school_moto}","${school_logo}
    ","${school_email}","${school_adrdress}","${signature}
 )`).then((results) => res.json({ sucsess: true, results: results }))
        .catch((err) => console.log(err))
}   