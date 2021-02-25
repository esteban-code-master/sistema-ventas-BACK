const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')
const {JwtDecode} = require('../../service/jwt')

exports.isAuth = (req,res,next) => {
    if (!req.headers.authorization) {
        const boomStatus = boom.forbidden();
        return res.status(boomStatus.output.statusCode).json(boomStatus.output);
    }
   try
   {
        const payload =  JwtDecode(req.headers.authorization.split(' ')[1])          
        req.payload = payload
        next()
   }
   catch(err){
        const boomStatus = boom.unauthorized('The token has expired');
        return res.status(boomStatus.output.statusCode).json(boomStatus.output);
   }
}