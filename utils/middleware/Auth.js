const jwt = require('jsonwebtoken')
const boom = require('@hapi/boom')
const {JwtDecode} = require('../../service/jwt')

const isAuth = (req,res,next) => {
   
   try
   {       
        if(req.path != '/api/login')
        {
            if (!req.headers.authorization)
            {
                const boomStatus = boom.forbidden();
                return res.status(boomStatus.output.statusCode).json(boomStatus.output);
            }
            else
            {
                const payload =  JwtDecode(req.headers.authorization.split(' ')[1])          
                req.payload = payload                
                next()
            }
        }
        else 
        {
            next()
        }        
   }
   catch(err){
        const boomStatus = boom.unauthorized('The token has expired');
        return res.status(boomStatus.output.statusCode).json(boomStatus.output);
   }
}


module.exports = isAuth