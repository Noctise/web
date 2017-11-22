#解决中文乱码:在数据库范围内
#1:检查文件保存utf-8
#2:打开mysql命令窗口 SET NAMES GBK;回车
#3:复制sql指令
###注意:顺序###
CREATE DATABASE huimaiche CHARSET=UTF8;
USE huimaiche;
CREATE TABLE car(
 cid INT PRIMARY KEY AUTO_INCREMENT,
 cname VARCHAR(20),
 pic VARCHAR(100),
 price DECIMAL(10,2),
 pubtime DATETIME,
 type    VARCHAR(10)
);
INSERT INTO car VALUES(null,'qq1','1.jpg',50000,now(),'lt8');
INSERT INTO car VALUES(null,'qq2','2.jpg',60000,now(),'lt8');
INSERT INTO car VALUES(null,'qq3','3.jpg',70000,now(),'lt8');
INSERT INTO car VALUES(null,'qq4','4.jpg',150000,now(),'lt15');
INSERT INTO car VALUES(null,'qq5','5.jpg',160000,now(),'lt15');
INSERT INTO car VALUES(null,'qq6','6.jpg',270000,now(),'lt30');
INSERT INTO car VALUES(null,'qq7','7.jpg',250000,now(),'lt30');
INSERT INTO car VALUES(null,'qq8','8.jpg',160000,now(),'suv');

CREATE TABLE user(
 uid INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(20),
 upwd  VARCHAR(32)
);
INSERT INTO user VALUES(null,'东东','123');
INSERT INTO user VALUES(null,'南南','123');
INSERT INTO user VALUES(null,'tom','123');



