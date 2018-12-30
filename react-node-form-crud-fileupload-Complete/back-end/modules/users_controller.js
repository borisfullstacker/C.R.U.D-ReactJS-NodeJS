var table_name = 'users'
var mysql = require('promise-mysql');

var pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: "usersdb",
    connectionLimit: 10,
});




//db calls for movie
let db = {
    getAllUsers: () => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM ${table_name}`;
            pool.query(sql, function (err, result) {
                if (err) throw err;
                // console.log(result);
                resolve(result);
            });
        });
    },

    addUser: (name, year, rating,url) => {
        return new Promise((resolve, reject) => {
        let sql = `INSERT INTO ${table_name} (name, year, rating, url)
         VALUES ('${name}',${year}, ${rating}, '${url}')`;
            pool.query(sql, function (err, result) {
                if (err) throw err;
                resolve(result);
            });
        });
    },

    deleteUserById: (id) => {
    return new Promise ((resolve,reject) => {
        let sql = `DELETE FROM ${table_name} WHERE id = '${id}'`
        pool.query(sql, function (err) {
            if (err) throw err;
            resolve ("OK");
        });
    });
   },

    updateUserById: (id, name, year) => {
        return new Promise ((resolve,reject) => {
        var sql = `UPDATE ${table_name} SET name = '${name}', year=${year}  WHERE id = ${id}`;
         pool.query(sql,(err, result) =>{
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            resolve ("OK");
        });
    });
    },

    searchUserById: (id) => {
        return new Promise ((resolve, reject) =>{
        var sql = `SELECT *FROM ${table_name} WHERE id=${id}`
        pool.query(sql, function (err, result) {
            if (err) throw err;
            resolve (result);
        });
    });

    }
}




module.exports = db;














