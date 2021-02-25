const Restriction  = {
    "gerente"  : 2 ,
    "cajero" : 2 ,
}

exports.PermissionManager = (req,res,next) =>{    
    basePermission(req.payload.role,Restriction.gerente,res)
}

const basePermission = (permission,restriction,res) => {
    if(permission === restriction)
    {    
        next()
    }
    else
    {
        res.status(400).json({
            status : res.statusCode,
            messaje : "you don't have enough permissions"
        })
    }   
}