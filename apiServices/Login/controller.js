const boom = require('@hapi/boom')
const bcrypt=require('bcrypt')
const Sequelizelib = require('../../lib/sequelize')
const {getAuthenticateUser} = require('../employees/service')
const {JwtCreate,JwtDecode} = require('../../service/jwt')

const seq =  new Sequelizelib()

exports.loginController = async(req,res,next) => {
    try 
    {              
        const db =  await  seq.connection()
        const {user,password} =  req.body    
        const login = await getAuthenticateUser(db,user)       
        const compare =  await bcrypt.compare(password,login.password)
        if(compare){
            const token = JwtCreate({
                IdEmpleado : login.id,
                name : login.name,
                role : login.id_role,
                Post : 1,                                
            })

            res.status(200).json({
                status : res.statusCode,
                token : token               
            })
        } 
        else {
            next(boom.unauthorized('Unauthorized user'))
        }        
    }
    catch(err)
    {
        next(boom.internal(err))    
    }
}

exports.getDataFromToken = (req,res,next) => {    
    try
    {
        console.log(req)
        const token = req.headers.authorization?.split(' ')[1];
        const info = token ? JwtDecode(token) : {};

        res.status(200).json({
            status: res.statusCode,
            message: info,
        });
    }
    catch(err){
        next(boom.internal(err)) 
    }
}