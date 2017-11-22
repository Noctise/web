#练习一:14:10--14:15
1:创建库库名为crm04并且指定编码为utf8;
CREATE DATABASE crm04 CHARSET=UTF8;
2:进入crm04库中
USE crm04;
3:查询当前crm04库中所有表名称
SHOW TABLES;
4:创建表 emp 雇员表 (雇员编号,雇员名称,年龄)
CREATE TABLE emp(
  id   INT,
  name VARCHAR(20),
  age  INT
);
INSERT INTO emp VALUES(100,'tom',23);
5:查询emp结构
DESC emp;
#删除指定库
DROP DATABASE 库名;
#删除指定表
#恢复数据非常困难，一定谨慎!!
DROP TABLE 表名;


练习二:创建表添加记录  14:37--14:42
1:创建表图书表 book (编号,书名,价格)
  CREATE TABLE book(
   id INT,
   name VARCHAR(20),
   price DOUBLE(10,2)
  );
2:添加三条记录
  INSERT INTO book VALUES(1,'js',100.50);
  INSERT INTO book VALUES(2,'css',90.50);
  INSERT INTO book VALUES(3,'h5',100.50);
#检查:查询当前表中所有记录
 SELECT * FROM 表名;
练习三:14:55--15:00
1:创建表学生表 (编号,姓名,年龄,入学时间)
CREATE TABLE stu01(
 id INT,
 name VARCHAR(20),
 age  INT,
 ctime DATETIME
);
2:添加5条记录
INSERT INTO stu01 VALUES(1,'tom1',19,'2000-10-10');
INSERT INTO stu01 VALUES(2,'tom2',19,'2000-10-11');
INSERT INTO stu01 VALUES(3,'tom3',19,'2000-10-12');
INSERT INTO stu01 VALUES(4,'tom4',19,'2000-10-13');
INSERT INTO stu01 VALUES(5,'tom5',19,'2000-10-14');

INSERT INTO stu01 VALUES(6,'tom6',19,'2001-10-10');
INSERT INTO stu01 VALUES(7,'tom7',20,'2000-10-11');
INSERT INTO stu01 VALUES(8,'tom8',25,'2010-10-12');
INSERT INTO stu01 VALUES(9,'tom9',29,'2017-10-13');
INSERT INTO stu01 VALUES(10,'tom10',17,'2016-10-14');
3:查询所有记录 
SELECT * FROM stu01;


练习三:删除记录 15:37---15:40
 DELETE FROM stu01 WHERE id = 2;        
 DELETE FROM stu01 WHERE name = 'tom2';
 DELETE FROM stu01 WHERE id > 7;
 DELETE FROM stu01 WHERE ctime='2016-10-14';
 DELETE FROM stu01 WHERE
 id=4 AND name='tom4' AND age=19;


练习四:
UPDATE stu01 SET age = 18 WHERE id = 3;
UPDATE stu01 SET name='tom10',age=20
WHERE id = 5;


练习五:
1:查询雇员表中所有记录
SELECT * FROM emp;
2:查询雇员表只需要(编号,姓名,工资)列
SELECT id,name,sal FROM emp;
3:查询雇员表只需要(编号,姓名,工资,工资*1.2)列
SELECT id,name,sal,sal*1.2 FROM emp;
*4:查询雇员表，条件工资小于110000
SELECT * FROM emp
WHERE sal < 110000;
*5:查询雇员表，条件工资大于100000并且小于110000
SELECT * FROM emp
WHERE sal >= 100000 AND sal <= 110000;
*6:查询雇员表，条件出生日期1999以后
SELECT * FROM emp
WHERE bdate > '1999-01-01';
7:查询所有雇员表中所有记录按工资升序
SELECT * FROM emp
ORDER BY sal;
8:查询所有雇员表中所有记录按工资降序
SELECT * FROM emp
ORDER BY sal DESC;
9:mysql 常用函数
  now()     当前日期和时间
  max(列)   获取当前列中最大值
  min(列)   获取当前列中最小值
  sum(列)   获取当前列中所有数值和
  avg(列)   获取当前列中所有数值平均值
  count(列) 获取当前列中记录个数
 SELECT max(sal),min(sal),avg(sal),count(sal),sum(sal)
 FROM emp;

