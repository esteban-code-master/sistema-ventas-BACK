const boom = require('@hapi/boom')

const handdleError = (err,req,res,next) => {
    
    const { output: {statusCode, payload }, } = err;
    console.log(statusCode)

    res.status(statusCode).json({      
        err : payload
    })
}


module.exports = handdleError