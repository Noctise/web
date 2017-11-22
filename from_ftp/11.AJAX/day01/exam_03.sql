总结今天SQL
1：创建库/删除库
CREATE DATABASE 库名  CHARSET=UTF8;
DROP DATABASE 库名;
2：创建表/删除表
CREATE TALBE 表名(
 列名 类型,
 列名 类型,
 ...
 列名 类型
);
DROP TALBE 表名;
3：进入指定库
USE 库名;
4：添加记录
INSERT INTO 表名 VALUES(值1,'值2',,);
5：更新记录
UPDATE 表名 SET 列名=值,... WHERE 条件
6：删除记录
DELETE FROM 表名 WHERE 条件;
7：查询记录
SELECT * FROM 表名 WHERE 条件;