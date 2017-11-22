DROP DATABASE IF EXISTS dangdang;

CREATE DATABASE dangdang CHARSET=utf8;

USE dangdang;

CREATE TABLE product_type(
 id INT,
 name VARCHAR(20),
 tcount INT
);

INSERT INTO product_type VALUES(1,'book',2);
INSERT INTO product_type VALUES(2,'dvd',2);
INSERT INTO product_type VALUES(3,'cd',2);
INSERT INTO product_type VALUES(4,'mp3',2);
INSERT INTO product_type VALUES(5,'software',2);

CREATE TABLE product(
 id INT,
 name VARCHAR(100),
 price DOUBLE(12,2),
 pic  VARCHAR(100),
 pubtime DATETIME,
 did     INT
);

INSERT INTO product VALUES(1,'js book1',100,'1.jpg',now(),1);
INSERT INTO product VALUES(2,'css book2',99,'1.jpg',now(),1);
INSERT INTO product VALUES(3,'js book3',100,'1.jpg',now(),2);
INSERT INTO product VALUES(4,'css book4',99,'1.jpg',now(),2);
INSERT INTO product VALUES(5,'js book5',100,'1.jpg',now(),3);
INSERT INTO product VALUES(6,'css book6',99,'1.jpg',now(),3);
INSERT INTO product VALUES(7,'js book7',100,'1.jpg',now(),4);
INSERT INTO product VALUES(8,'css book8',99,'1.jpg',now(),4);
INSERT INTO product VALUES(9,'js book9',100,'1.jpg',now(),5);
INSERT INTO product VALUES(10,'css book0',99,'1.jpg',now(),5);
INSERT INTO product VALUES(11,'css book0',99,'1.jpg','2000-10-10',5);