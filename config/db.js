const sql = require('mssql')

require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options:{
        encrypt:true,
         trustServerCertificate: true,
    }
}

const connectToSqlServer  = async () =>{
    try{
        const pool = sql.connect(config);
        console.log('Connected to SQL Server');
        return pool;
    }
    catch(err){
        console.error('DB Connection Error:', err);
        throw err;

    }

}
module.exports = {connectToSqlServer,sql}