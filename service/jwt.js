const config = require('../config/index')
const jwt = require('jsonwebtoken')

exports.JwtCreate = (payload) => {
    const token = jwt.sign(payload,config.key.secret)
    return token
}

exports.JwtDecode = (token) => {    
    let payload
    jwt.verify(token,config.key.secret,(err, decode) => {        
        payload = decode
    })
    return payload
}