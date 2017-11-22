CREATE DATABASE msg CHARSET=UTF8;
USE msg;
CREATE TABLE t_msg(
  mid INT PRIMARY KEY AUTO_INCREMENT,
  uname   VARCHAR(20),
  phone   BIGINT,
  pubtime DATETIME,
  content VARCHAR(100)
);
INSERT INTO t_msg VALUES(null,'tom1',13999999999,now(),'hi1');
INSERT INTO t_msg VALUES(null,'tom2',13999999999,now(),'hi2');
INSERT INTO t_msg VALUES(null,'tom3',13999999999,now(),'hi3');
