#1:创建库 ifeng
CREATE DATABASE ifeng CHARSET=utf8;
USE ifeng;
#2:创建表 t_news
CREATE TABLE t_news(
 nid       INT PRIMARY KEY AUTO_INCREMENT,
 title     VARCHAR(50),
 content   VARCHAR(2000),
 ctime     DATETIME,
 viewcount BIGINT
);
#9:37--9:39
INSERT INTO t_news VALUES(null,'hi1','hi',now(),0);
INSERT INTO t_news VALUES(null,'hi2','hi',now(),0);
INSERT INTO t_news VALUES(null,'hi3','hi',now(),0);
INSERT INTO t_news VALUES(null,'hi4','hi',now(),0);
#(临时)->将显示中文编码改gbk
#数据库中的数据还是utf-8
SET NAMES GBK;
INSERT INTO t_news VALUES(null,'东东1','东东',now(),0);
INSERT INTO t_news VALUES(null,'东东2','东东',now(),0);
