#:创建库 dangdang 
#:创建表 dd_book
#bid 编号 bname 名称 pic 图片
#price 价格 pubdate 上架时间

CREATE DATABASE dangdang CHARSET=UTF8;
USE dangdang;
CREATE TABLE dd_book(
 bid INT PRIMARY KEY AUTO_INCREMENT,
 bname VARCHAR(50),
 pic   VARCHAR(100),
 price DECIMAL(10,2),
 pubdate DATETIME
);
INSERT INTO dd_book VALUES(null,'css指南','1.jpg',100,now());
INSERT INTO dd_book VALUES(null,'css大全','2.jpg',100,now());
INSERT INTO dd_book VALUES(null,'js大全','3.jpg',90,now());
INSERT INTO dd_book VALUES(null,'js指南','4.jpg',100,now());
INSERT INTO dd_book VALUES(null,'js入门','5.jpg',100,now());
INSERT INTO dd_book VALUES(null,'js入门1','6.jpg',30,now());
INSERT INTO dd_book VALUES(null,'js入门2','7.jpg',100,now());
INSERT INTO dd_book VALUES(null,'js入门3','8.jpg',35,now());
INSERT INTO dd_book VALUES(null,'js入门4','9.jpg',100,now());
INSERT INTO dd_book VALUES(null,'js入门5','10.jpg',100,now());