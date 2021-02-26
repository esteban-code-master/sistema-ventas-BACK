const Users = require('./model')

exports.newUsers = async (db, data) => {
    return new Promise((resolve, reject) =>{
        Users(db)
        .create({
            name : data.name,
            ape_father : data.ape_father,
            ape_mother : data.ape_mother,
            phone : data.phone,
            email : data.email,
            user : data.user,
            password : data.password,
            id_role : data.id_role
        })
        .then((resp) => {
            resolve(resp)
        })
        .catch((err) => {
            reject(err)
        })
    })
}
exports.getAuthenticateUser = (db,user) => {
    return new Promise((resolve,reject) => {
        Users(db)
        .findOne({
            attributes : ['id', 'name','password','id_role'],
            where : {
                user : user
            }
        })
        .then((user)=>{
            resolve(user)
        })
        .catch((err)=>{
            reject(err)
        })
    })
}
exports.getUsers = async (db, offset, limit) =>{
    return new Promise((resolve,reject) =>{
        Users(db)
        .findAll({
            // attributes: ['id', 'name', 'ape_father', 'ape_mother', 'phone', 'email', 'user', 'password'],
            offset: offset,
            limit: limit,
            include: [
                {
                    attributes: ['name'],
                    association: "rol",
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



exports.updateUsers = async(db, data, id_objetivo) =>{
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
                id: id_objetivo
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

