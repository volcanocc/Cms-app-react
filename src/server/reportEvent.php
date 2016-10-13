<?php

require_once ('db.php');

$title = $_POST['title'];
$type = $_POST['type'];
$content = $_POST['content'];
$addr = $_POST['addr'];
//$createTime = $_POST['createTime'];
$status = $_POST['status'];

mysqli_select_db($Link, 'cmsapp');

$sql = "INSERT INTO `event_info`(`title`, `type`, `content`, `createTime`, `addr`, `status`) VALUES ('{$title}','{$type}','{$content}',now(),'{$addr}','{$status}')";

mysqli_query($Link, 'SET NAMES utf8');
mysqli_query($Link, $sql);


echo json_encode(array('success'=>'ok'));

mysqli_close($Link);







