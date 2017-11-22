<?php
//1：判断上传文件只能是图片(gif/jpg/pjpeg)
//2: 判断上传文件大小 最大4MB
if ((($_FILES["file"]["type"] == "image/gif")
|| ($_FILES["file"]["type"] == "image/jpeg")
|| ($_FILES["file"]["type"] == "image/pjpeg"))
&& ($_FILES["file"]["size"] < 4000000))
  {
  //3:判断上传文件是否出错	   
  if ($_FILES["file"]["error"] > 0)
    {
    //4:显示出错信息
    echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
    }
  else
    {
    echo "Upload: " . $_FILES["file"]["name"] . "<br />";
    echo "Type: " . $_FILES["file"]["type"] . "<br />";
    echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
    //5:'临时文件'->保存在哪里
    echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";
    //6:判断文件是否己存在
    if (file_exists("uploads/" . $_FILES["file"]["name"]))
      {
     //7:如果该文件存在的,输出信息 文件己存在
      echo $_FILES["file"]["name"] . " already exists. ";
      }
    else
      {
      //8:将临时文件合并合后，移动uploads目录下
      move_uploaded_file($_FILES["file"]["tmp_name"],
      "uploads/" . $_FILES["file"]["name"]);
      echo "Stored in: " . "uploads/" . $_FILES["file"]["name"];
      }
    }
  }
else
  {
  echo "Invalid file";
  }
?>