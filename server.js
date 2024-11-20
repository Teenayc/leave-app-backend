const express = require('express');
const cors = require('cors');
require('dotenv').config()
const app = express();
const cookieParser  = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const SERVER_PORT = process.env.SERVER_PORT;
const server = http.createServer(app);
const multer = require('multer')
const PDFDocument = require('pdf-lib').PDFDocument
const fs = require('fs')
//const upload  = multer({dest:'uploads/images/'})

const domainsFromEnv = process.env.CORS_DOMAINS || ""
const whitelist = domainsFromEnv.split(",").map(item => item.trim())

const corsOptions ={
    origin: function (origin, callback){
       if(!origin || whitelist.indexOf(origin) !== -1){
          callback(null, true)
       }else{
          callback(new Error("Not allowed by CORS"))
       }
    },
   credentials:true, //access-control-allow-credentials:true
   optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());
// Parse JSON bodies
// app.use(bodyParser.json());
app.use(cookieParser());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin: *");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, X-client-Key, X-Client-Token, X-Client-Secret, Authorization"
    );
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT,HEAD,OPTIONS');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

const leaveapplications = require('./routes/leaveApplicationRoute');

app.use('/api/v1/psc', leaveapplications);

server.listen(process.env.SERVER_PORT,()=>{
    console.log(`Server started running on port ${SERVER_PORT}`);
});

// app.listen(3000, ()=>{
//     console.log("listening to port 3000")
// })