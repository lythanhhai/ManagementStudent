<?php   
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Credentials:true");
    header('Content-type: application/json');  
    //session_start();
    include_once("../Model/M_handleSignIn.php");

    $json = file_get_contents('php://input');
    // chuyển body thành string
    $obj = json_decode($json,true);

    $ID = $obj['ID'];
    $Name = $obj['Name'];
    $Age = $obj['Age'];
    $University = $obj['University'];

    $model_student = new Model_HandleSignIn();
    $message = '';
    try
    {
        $model_Student->createStudent($ID, $Name, $Age, $University);
        $message = "winner";
    }
    catch(Exception $err)
    {
        $message = "loser";
    }

    $message_json = json_encode($message);
    echo $message_json;
   
?>