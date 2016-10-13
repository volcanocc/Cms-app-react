<?php

header('application/json; charset=utf-8');

header("Access-Control-Allow-Origin:http://localhost:8080");

$Link = mysqli_connect('localhost', 'root', '', 'cmsapp', 3306);

if (!$Link) {
    die('Could not connect: ' . mysqli_error());
}



