
module.exports = {
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    database:process.env.MySQL_db,
    password:process.env.password,
    dialect:process.env.dialect,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
        }
};

