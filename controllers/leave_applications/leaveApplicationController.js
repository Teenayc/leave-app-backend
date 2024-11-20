const {genSaltSync,hashSync,compareSync} = require('bcrypt');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const date = require('date-and-time');
const schedule = require('node-schedule');
const cron = require('node-cron');
const emailExistence = require('email-existence');
const validator = require("email-validator");

const moment = require('moment')
const our_date = moment().format('DD-MM-YYYY HH:mm:ss');
const invoice_ddate = moment().format('YYYY');
const nodemailer = require('nodemailer'); 
const { Op, where } = require("sequelize");
const db = require('../../models/db');
const Joi = require('joi');
const PDFDocument = require('pdf-lib').PDFDocument
const multer = require("multer")
const fs = require('fs');
const path = require('path');

const UsersDB = db.users;
const ApplicationsDB = db.applications;

const AuditTrailDB = db.audit_trail;


const fileFilter = (req,file,cb)=>{
    if(file.mimetype === 'application/pdf'){
        cb(null, true);
    }else{
        cb(null, false);
    }
}

const transport = nodemailer.createTransport({
  pool: true, // Enables the use of pooled connections
  maxConnections: 5, // Maximum number of simultaneous connections to the SMTP server
  maxMessages: 100, // Maximum number of messages to send per connection
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,

  auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
  },
});



module.exports = {

    async CreateUser(req,res){

        try{

          let random_string = '';
          let random_string2 = '';
          const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

          for(let i = 0;i < 3; i++){
              random_string += characters.charAt(Math.floor(Math.random() * characters.length))
          }

          for(let i = 0;i < 3; i++){
              random_string2 += characters.charAt(Math.floor(Math.random() * characters.length))
          }

          const sn = random_string + random_string2;

          const employee_id = "PSC"+sn;
          const username = req.body.username;
          const firstname = req.body.firstname;
          const lastname = req.body.lastname;
          const email = req.body.email;
          const password = req.body.password;
          const user_role = "Staff";
          const department = req.body.department;
  
          const exist = await UsersDB.findOne({ 
            where:{
              [Op.and]:[
                {employee_id: employee_id},
                {username:username},
                {email:email}
              ]
            }
          });

          if(exist === null){
            const salt = genSaltSync(10);
            const passwordHash = hashSync(password,salt);

            const user = await UsersDB.create({
    
              employee_id:employee_id,
              username:username,
              firstname:firstname,
              lastname:lastname,
              email:email,
              password:passwordHash,
              user_role:user_role,
              department:department
  
            });
  
            const audit = await AuditTrailDB.create({
  
                user:`Admin`,
                action:`account created for user: ${employee_id}`,
                dump:`account created`,
  
            });
  
            res.status(200).send({ success:1, message:`Employee: ${employee_id} created successfully.`});

          }else{
            res.status(405).json({ message: 'User already exists. Try a different user.' });
          }

        }catch(e){

            res.status(500).json({status:'failed',error:e});

        }
        
    },

    async LoginUser (req,res){

        try{

            const username = req.body.username;
            const password = req.body.password;

            if(!username || !password) {return res.status(400).json({status:'failed',message:'Username and Password are required'});}
            
            const foundUser = await UsersDB.findOne({ where: {username: username}});

            //console.log(foundUser)

            if(foundUser) {

                const match = compareSync(password,foundUser.password)
                    if(match){
                        
                        const accessToken = jwt.sign(
                            {username:foundUser.username,
                            user_role:foundUser.user_role,
                            department:foundUser.department},  
                            process.env.ACCESS_TOKEN_SECRET,
                            {expiresIn:process.env.ACCESS_TOKEN_DURATION
                        });

                        const refreshToken = jwt.sign(
                            {username:foundUser.username,
                            user_role:foundUser.user_role,
                            department:foundUser.department}, 
                            process.env.REFRESH_TOKEN_SECRET,
                            {expiresIn:process.env.REFRESH_TOKEN_DURATION
                        });

                        const audit = await AuditTrailDB.create({
        
                            user:username,
                            action:`accessToken and refreshToken generated.`,
                            dump:`Login User`,
        
                        });

                        await UsersDB.update({refresh_token:refreshToken}, {where: { username:username}});

                        res.cookie('accessToken', accessToken); //15 minutes in milliseconds
                        res.cookie('refreshToken', refreshToken); 
                        
                        res.status(200).json({accessToken,refreshToken});

                    }else{

                        const audit = await AuditTrailDB.create({
        
                            user:username,
                            action:`Wrong combination of username and password. Try again.`,
                            dump:`Login User`,
        
                        });

                        return res.status(402).json({status:'failed',message:'Wrong combination of username and password. Try again.'});

                    }

            }else{


                const audit = await AuditTrailDB.create({
        
                    user:username,
                    action:`tried to login`,
                    dump:`tried to login`,

                });

                return res.status(405).json( {status: 'failed',message: 'User not found. Try again.'} );
            }       

        }catch(e){

            res.status(500).json({status:'failed',message:`User not found. ${e}`}); //unauthorized
        }

    },

    async AssignUserRole(req,res){

        try{

            let id = req.params.id;
            let new_role = req.body.user_role;

            let role = await UsersDB.findOne({
                where:{
                    employee_id:id
                }
            });

//console.log(role)
            if(role){

                await UsersDB.update({
                    user_role:new_role
                }, {
                    where:{
                        employee_id:id
                    }
                }); 

                const audit = await AuditTrailDB.create({
  
                    user:`Admin`,
                    action:`Employee: ${employee_id} assigned new role: ${new_role}`,
                    dump:`new role assigned`,
      
                });

                res.status(200).send({ success:1, message:"new role assigned successfully."});

            }else{
                res.status(400).send({ success:1, message:"User not found. Try another user."});
            }

        }catch(e){

            res.status(500).json({status:'failed',error:e})

        }
        
    },

    async LeaveApplicationByEmployee(req,res){


      
    },

    async updateLeaveApplicationByEmployee(req,res){

        
    },

    async updateUserRoleByEmployee(req,res){

        
    },

    async RefreshToken (req,res){
        
        try{
            const refreshToken = req.params.refresh;

            const payload = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);

            if(!payload){
                return res.status(401).json({message:'unauthenticated'})
            }

            const accessToken = jwt.sign(
                {username:payload.username,
                user_role:payload.user_role},  
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn:process.env.ACCESS_TOKEN_DURATION
            });

            res.cookie('accessToken', accessToken);
            //console.log(res)
            res.status(200).json({message:'success',accessToken});
            
        }catch(e){
            res.status(401).json({status:'failed', e});
        }
        
    },

}