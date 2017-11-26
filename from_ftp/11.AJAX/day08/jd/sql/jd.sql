#用户登录表   11:30--11:35
#创建库jd
CREATE DATABASE jd CHARSET=UTF8;
USE jd;
#创建表jd_user[uid uname upwd]
CREATE TABLE jd_user(
 uid   INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(20),
 upwd  VARCHAR(32)
);
#添加三条记录
INSERT INTO jd_user VALUES(null,'qiangdong','123456');
INSERT INTO jd_user VALUES(null,'naicha','123456');
INSERT INTO jd_user VALUES(null,'tom','123456');

#创建产品表
#productlist.php 1-8 条记录
#productlist.js  15:55--16:10
CREATE TABLE jd_product(
  pid    INT PRIMARY KEY AUTO_INCREMENT,
  pname  VARCHAR(100),
  price  DECIMAL(10,2),
  pic    VARCHAR(100)
);