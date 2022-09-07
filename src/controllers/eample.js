import db from "../models"

export const example = (req, res) => {
    const {
        user_name = "", email = "", fisrt_name = "", last_name = "", country = "", state = "", password = "", creted_at = "", school_name = "", school_moto = "", school_logo = "", school_email = "", school_adrdress = "", signature = ""
    } = req.body;
    db.sequelize.query(`insert into users(user_name,email,fisrt_name,last_name,country,state,password,creted_at,school_name,school_moto,school_logo,school_email,school_adrdress,signature)
    values("${user_name}","${email}","${fisrt_name}","${last_name}","${country}","${state}","${password}","${creted_at}","${school_name}","${school_moto}","${school_logo}","${school_email}","${school_adrdress}","${signature})`)

        .then((results) => res.json({ sucsess: true, results: results[0] }))
        .catch((err) => console.log(err))
}


export const getExample = (req, res) => {
    db.sequelize.query(`SELECT user_name,email,fisrt_name,last_name,country,state,password,creted_at,school_name,school_moto,school_logo,school_email,school_adrdress,signature FROM users`)
        .then((results) => res.json({ sucsess: true, results: results[0] }))
        .catch((err) => console.log(err))
}

export const updateExample = (req, res) => {
    const {
        user_name = "", email = "", fisrt_name = "", last_name = "", country = "", state = "", password = "", creted_at = "", school_name = "", school_moto = "", school_logo = "", school_email = "", school_adrdress = "", signature = "", id = ""
    } = req.body;
    db.sequelize.query(`update users set user_name="${user_name}",email="${email}",fisrt_name="${fisrt_name}",last_name="${last_name}",country="${country}",state="${state}",password="${password}",creted_at="${creted_at}",school_name="${school_name}",school_moto="${school_moto}",school_logo="${school_logo}",school_email="${school_email}",school_adrdress="${school_adrdress}",signature="${signature}"  where id=${id}`)
        .then((results) => res.json({ sucsess: true, results: results[0] }))
        .catch((err) => console.log(err))
}

