const Users = require('./modelo')

exports.newUsers = async (db, value) => {
    return new Promise((resolve, reject) =>{
        Users(db)
        .create({
            name: value.name,
            ape_father: value.ape_father,
            ape_mother: value.ape_mother,
            phone: value.phone,
            email: value.email,
            user: value.user,
            password: value.password,
            id_role: value.id_role
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}

exports.getUsers = async (db) =>{
    return new Promise((resolve,reject) =>{
        Users(db)
        .findAll({
            include: [
                {
                    model : roles,
                },
            ],
            raw: true,
            nest: true
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })

    })
}



exports.updateUsers = async(db, data) =>{
    return new Promise ((resolve, reject) => {
        Users(db)
        /*Antes de ingresar los datos crear una función aparte*/
        
        .update( {
            
            name: data.name,
            ape_father: data.ape_father,
            ape_mother: data.ape_mother

        },
        {
            where:
            {
                id: data.id
            }
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}

