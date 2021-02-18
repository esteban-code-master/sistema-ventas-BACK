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

exports.getUsers = async (db, offset, limit) =>{
    return new Promise((resolve,reject) =>{
        Users(db)
        .findAll({
            attributes: ['id', 'name', 'ape_father', 'ape_mother', 'phone', 'email', 'user', 'password'],
            offset: offset,
            limit: limit,
            include: [
                {
                    attributes: ['rol'],
                    association: "roles",
                    required: true
                }
            ],
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
        .update( {
            
            name: data.name,
            ape_father: data.ape_father,
            ape_mother: data.ape_mother,
            phone: data.phone,
            email: data.email,
            user: data.user,
            id_role: data.id_role

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

