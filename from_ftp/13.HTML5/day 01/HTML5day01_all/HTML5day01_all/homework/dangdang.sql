CREATE DATABASE dangdang CHARSET=UTF8;
USE dangdang;
CREATE TABLE book(
bid   INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(20),
price DECIMAL(10,2),
pubdate DATETIME,
intro VARCHAR(200)
);
INSERT INTO book VALUES(null,'js1',100.10,now(),'aa');
INSERT INTO book VALUES(null,'js2',101.10,now(),'aa');
INSERT INTO book VALUES(null,'js3',102.10,now(),'aa');
INSERT INTO book VALUES(null,'js4',103.10,now(),'aa');
