<?php

require_once('db.php');

$id = $_GET['id'];

mysqli_select_db($Link, 'cmsapp');

$sql = "SELECT * FROM `event_info` WHERE `id`= '{$id}'";

mysqli_query($Link, 'SET NAMES utf8');

$result = mysqli_query($Link, $sql);

$sendData = array();

while ($row = mysqli_fetch_assoc($result)) {
    array_push($sendData, array(
        'id' => $row['id'],
        'title' => $row['title'],
        'type' => $row['type'],
        'content' => $row['content'],
        'createTime' => $row['createTime'],
        'addr' => $row['addr'],
        'status' => $row['status'],
    ));
}

echo json_encode(array('returnCode' => '200', 'list' => $sendData));
