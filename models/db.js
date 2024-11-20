const dbConfig = require('../config/config');
const {Sequelize, DataTypes} =require('sequelize');

const sequelize_db_sample = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,{
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        operatorsAliases:0,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle,
        }
    }
)


sequelize_db_sample.authenticate()
.then(() => {
    console.log('MySQL Leave Applications DB Connected...')
})
.catch(err=>{
    console.log('Error Leave Applications DB: ' + err)
})


const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize_db_sample


db.users = require('./database_leave_application/users.js')(sequelize_db_sample,DataTypes)
db.applications = require('./database_leave_application/applications.js')(sequelize_db_sample,DataTypes)
db.audit_trail = require('./database_leave_application/audit_trail.js')(sequelize_db_sample,DataTypes)


db.sequelize.sync({force:false})
.then(() => {
    console.log('re-sync done!')
})


module.exports = db