CREATE DATABASE weiduomei CHARSET=UTF8;
USE weiduomei;
CREATE TABLE dm_cake_type(
  tid   INT PRIMARY KEY AUTO_INCREMENT,
  tname VARCHAR(20),
  tcount INT
);
CREATE TABLE dm_cake(
  did   INT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(20),
  price DECIMAL(10,2),
  pic   VARCHAR(20),
  tid   INT
);
INSERT INTO dm_cake_type VALUES(null,'巧克力',3);
INSERT INTO dm_cake_type VALUES(null,'芝士',2);
INSERT INTO dm_cake_type VALUES(null,'水果',2);
INSERT INTO dm_cake VALUES(null,'巧1',100,'01.jpg',1);
INSERT INTO dm_cake VALUES(null,'巧2',100,'02.jpg',1);
INSERT INTO dm_cake VALUES(null,'巧3',100,'03.jpg',1);
INSERT INTO dm_cake VALUES(null,'芝1',100,'04.jpg',2);
INSERT INTO dm_cake VALUES(null,'芝2',100,'05.jpg',2);
INSERT INTO dm_cake VALUES(null,'水1',100,'06.jpg',3);
INSERT INTO dm_cake VALUES(null,'水1',100,'07.jpg',3);





