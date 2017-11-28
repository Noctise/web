//第一函数:数组求和
function sum(arr){
 var result = 0;
 for(var v of arr){
    result += v;
 }
 return result;
}
//第二个函数:数组平均值
function avg(arr){
  return sum(arr)/arr.length;
}

//导出指定数据
//exports.sum = sum;
//exports.avg = avg;

//导出指定数据
module.exports.sum = sum;
module.exports.avg = avg;