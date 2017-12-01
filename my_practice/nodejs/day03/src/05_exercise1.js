const mysql = require("mysql");
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd",
    connectionLimit: 10
});
pool.getConnection((err, conn) => {
    var sql = "insert into jd_product values(null,?,?,?)";
    conn.query(sql, ["apple 9", 9.999, "9.jpg"], (err, result) => {
        console.log(result);
        conn.release();
    });
});