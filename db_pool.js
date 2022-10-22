const { Pool } = require('pg');
//require('dotenv').config();

const pool = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASWORD,
    port: process.env.DATABASE_PORT
});

const selectLastRow = () => {
    pool.query('SELECT * FROM st_31 ORDER BY id DESC LIMIT 1', (err, res) => {
        if(err){
            console.log(err.stack)
        }else{
            console.log('u = ' + res.rows[0].u);
            console.log('i = ' + res.rows[0].i);
            console.log('p1 = ' + res.rows[0].p1);
            console.log('time_create = ' + res.rows[0].time_create);
        }

        //pool.end();
    });
}

const poolClose = () => {
    pool.end();
}

exports.selectLastRow = selectLastRow;
exports.poolClose = poolClose;