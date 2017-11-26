<?php
header("Content-type:application/json;charset=utf-8");
$row = ["eid"=>1,"ename"=>"tom"];
$input = json_encode($row);
echo $input;
?>