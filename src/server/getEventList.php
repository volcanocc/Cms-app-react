<?php

header('application/json; charset=utf-8');
header("Access-Control-Allow-Origin:http://localhost:8080");

$Link = mysqli_connect('localhost', 'root', '', 'cmsapp', 3306);

if (!$Link) {
    die('Could not connect: ' . mysqli_error());
}

mysqli_select_db($Link, 'cmsapp');

$sql = "SELECT * FROM event_info";

mysqli_query($Link, "set names utf8");

$result = mysqli_query($Link, $sql);

$list = array();

while ($row = mysqli_fetch_array($result)) {

    $arr = json_encode(array(
        'id' => $row['id'],
        'title' => $row['title'],
        'content' => $row['content'],
        'createTime' => $row['createTime'],
        'addr' => $row['addr'],
        'status' => $row['status']
    ));

    array_push($list, $arr);

};

$data = json_encode(array('returnCode' => '200', 'list' => $list));

echo $data;

mysqli_close($Link);

?>



