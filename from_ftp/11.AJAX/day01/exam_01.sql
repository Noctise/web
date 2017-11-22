
#练习一:10:25---10:30
SELECT now();
status;
#创建数据库注意事项
#html/css/js/php/    编码 utf-8
#mysql 编码 utf8

#练习二:五分钟练习:   创建库
CREATE DATABASE crm3 CHARSET=UTF8;
CREATE DATABASE oa3  CHARSET=UTF8;

#与创建库相关的指令
 查询当前服务器中所有库名
 a:SHOW DATABASES;
 进入指定库中
 b:USE 库名;

练习三:11:17--11:19
1:创建库库名tmooc编码utf8 
CREATE DATABASE tmooc CHARSET=UTF8;
2:查询当前mysql中所有库名称
SHOW DATABASES;
3:进入tmooc库中
USE tmooc;

#DROP 删库/删表
语法:DROP  DATABASE 库名;#危险性


#示例四:11:50--12:00
1:创建一张表 学生表(编号 整型,姓名 20,年龄)
#注意事项:表名/列名 全小写(不要中文空格特殊字符)
CREATE TABLE stu(
 id   INT,
 name VARCHAR(20),
 age  INT
);
2:创建一张表 班级表(编号，班级名称,班级人数)
#同一个库中不能存在二个表名相同情况
#不同表存在相同列名可以
CREATE TABLE clazz(
 id    INT,
 name  VARCHAR(20),
 count INT
);

#查询当前库中所有表名称
 SHOW TABLES;
#查询指定表列名称与列类型
 DESC 表名;