const mysql = require("mysql");
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd",
    connectionLimit: 10
});
pool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else {
        var sql = "delete from jd_user where uid = ?";
        conn.query(sql, [9], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result.affectedRows);
            }
            conn.release();
        });
    }
});