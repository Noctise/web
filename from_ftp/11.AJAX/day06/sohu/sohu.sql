#1:创建库
CREATE DATABASE sohu CHARSET=utf8;
USE sohu;
#2:创建表
CREATE TABLE user(
  uid   INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(20),
  upwd  VARCHAR(32)
);
#3:添加3条记录
INSERT INTO user VALUES(null,'tom','123');
INSERT INTO user VALUES(null,'jerry','123');
INSERT INTO user VALUES(null,'kk','123');
