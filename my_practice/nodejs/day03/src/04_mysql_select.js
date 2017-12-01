const mysql = require("mysql");
var pool = mysql.createPool({
    host: "127.0.0.1", user: "root", password: "", database: "jd", connectionLimit: 10
});
pool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else {
        var sql = "select * from jd_user LIMIT ?,?";
        conn.query(sql, [0, 3], (err, result) => {
            console.log(result);
            conn.release();
        });
    }
});