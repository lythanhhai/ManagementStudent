<?php   
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Credentials:true");
header('Content-type: application/json');  
//session_start();
require_once("../Model/M_handleSignIn.php"); 
 
    $json = file_get_contents('php://input');
     
    $obj = json_decode($json,true);

    $chon = $obj["chon"];
    $noidung = $obj["noidung"];

    $model_student = new Model_HandleSignIn();
    $arr = $model_student->searchStudent();

    if(count($arr) > 0)
    {
        $message_json = json_encode($arr);

    }
    else 
    {
        $message = "khong co sinh vien"
        $message_json = json_encode($message);
    }
    

    echo $message_json;
?>