<?php


$get_action = isset($_GET["action"]) ? $_GET["action"] : "rien";




echo json_encode($get_action);


//var_dump($get_action);
