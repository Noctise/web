//功能:删除jd_user 表一条记录
//DELETE FROM jd_user WHERE uid=?
//连接池:通用提升系统性能手段
//工作机制:
//在系统启动时自动创建多个连接(10)
//保存在内存中,当应用需要连接时，租用一个连接
//应用完后归还连接.
//1:加载mysql模块
const mysql = require("mysql");
//2:创建连接池 10
var pool = mysql.createPool({
    host: "127.0.0.1",  //mysql服务器主机名或IP
    user: "root",       //mysql服务器用户名
    password: "",       //mysql服务器密码
    database: "jd",     //使用库
    connectionLimit: 10 //系统启动时最小连接数
});
//3:获取一个连接
pool.getConnection((err, conn) => {
    if (err) {
        console.log(err);
    } else {
        //4:创建sql语句，并且发送sql
        var sql = "DELETE FROM jd_user WHERE uid = ?";
        conn.query(sql, [9], (err, result) => {
            //5:判断
            if (err) {
                console.log(err);
            } else {
                console.log(result.affectedRows);
            }
            //6:归还连接
            conn.release();
        });
    }
});

