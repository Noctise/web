CREATE DATABASE ifeng CHARSET =utf8;
USE ifeng;

CREATE TABLE t_news(
  nid       INT PRIMARY KEY AUTO_INCREMENT,
  title     VARCHAR(50),
  content   VARCHAR(2000),
  ctime     DATETIME,
  viewcount BIGINT
);

INSERT INTO t_news VALUES (null,'hi1','hi',now(),0);
INSERT INTO t_news VALUES (null,'hi2','hi',now(),0);
INSERT INTO t_news VALUES (null,'hi3','hi',now(),0);
INSERT INTO t_news VALUES (null,'hi4','hi',now(),0);
INSERT INTO t_news VALUES (null,'东东','东东',now(),0);

