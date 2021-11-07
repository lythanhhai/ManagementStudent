<?php   
    header("Access-Control-Allow-Origin: http://localhost:3000");
    header("Access-Control-Allow-Credentials:true");
    header('Content-type: application/json');  
    //session_start();
    include_once("../Model/M_handleSignIn.php");

    $json = file_get_contents('php://input');
        
    $obj = json_decode($json,true);

    $model_student = new Model_HandleSignIn();
    $students = $model_student->getAllStudent();

    $student_json = json_encode($students);
    echo $student_json;
   
?>