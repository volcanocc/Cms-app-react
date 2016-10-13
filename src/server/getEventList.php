<?php


require_once ('db.php');


mysqli_select_db($Link, 'cmsapp');

$sql = "SELECT * FROM event_info order by id desc";

mysqli_query($Link, 'SET NAMES utf8');

$result = mysqli_query($Link, $sql);

$list = array();

while ($row = mysqli_fetch_array($result)) {

    array_push($list, array(
        'id' => $row['id'],
        'title' => $row['title'],
        'content' => $row['content'],
        'createTime' => $row['createTime'],
        'addr' => $row['addr'],
        'status' => $row['status']
    ));

};

$data = json_encode(array('returnCode' => '200', 'list' => $list));

echo $data;

mysqli_close($Link);




