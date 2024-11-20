const {genSaltSync,hashSync,compareSync} = require('bcrypt');
const { Op } = require("sequelize");
const db = require('../models/db');
const BillerUserDb = db.billercode_users;

module.exports = async (req,res,next) =>{
    const authorization = req.headers.authorization;
    if(authorization){
        // return res.status(403).send({message: 'Unauthenticated user'});
        const encoded = authorization.substring(6);
        const decoded = Buffer.from(encoded, 'base64').toString('ascii');
        const [username,password] = decoded.split(':')

        const authenticatedUser = await BillerUserDb.findOne({where:{username:username}})

        if(authenticatedUser){
            //return res.status(403).send({message: 'Unauthenticated user'});
            const match = compareSync(password,authenticatedUser.password)

            if(match){
                req.authenticatedUser = authenticatedUser;
            }
        }
    }

    next();
    
}