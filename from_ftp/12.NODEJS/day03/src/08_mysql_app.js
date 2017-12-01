//功能:查询jd_product 
//连接池:通用提升系统性能手段
//pid/pname/price/pic
//工作机制:
//在系统启动时自动创建多个连接(10)
//保存在内存中,当应用需要连接时，租用一个连接
//应用完后归还连接.
//1:加载mysql模块
const mysql = require("mysql");
//2:创建数据库连接池
var pool = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "jd",
    connectionLimit: 10
});
//3:获取其中一个连接 
pool.getConnection((err, conn) => {
//4:创建SQL语句，发送sql
    var sql = "INSERT INTO jd_product VALUES(null,?,?,?)";
    conn.query(sql, ["apple 9", 9999, "9.jpg"], (err, result) => {
        //5:获取获取返回
        console.log(result);
        //6:归递连接
        conn.release();
    });
});

