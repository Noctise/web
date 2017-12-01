//功能:查询jd_user 
//连接池:通用提升系统性能手段
//SELECT * FROM jd_user LIMIT 0,3;
//工作机制:
//在系统启动时自动创建多个连接(10)
//保存在内存中,当应用需要连接时，租用一个连接
//应用完后归还连接.
//1:加载mysql模块
const mysql = require("mysql");
//2:创建数据连接池
var pool = mysql.createPool({
    host: "127.0.0.1", //mysql服务器主机名或ip
    user: "root",      //mysql服务器用户名
    password: "",      //mysql服务器密码
    database: "jd",    //使用库名
    connectionLimit: 10//连接池中连接数量默认10
});
//3:从连接池获取连接
pool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else {
        //4:创建sql语句并且发送sql 15:35--15:37
        var sql = "SELECT * FROM jd_user LIMIT ?,?";
        conn.query(sql, [0, 3], (err, result) => {
            //5:获取查询结果
            console.log(result);
            //6:归还连接
            conn.release();
        });
    }
});

