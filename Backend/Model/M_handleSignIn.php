<?php 
    include_once('E_Student.php');
    class Model_HandleSignIn 
    {
        public function __construct()
        {

        }
        public function getStudent($ID)
        {
            $link = mysqli_connect("localhost:3307","root","") or die ("khong the ket noi");
            // chọn loại kết nối
            mysqli_select_db($link,"qlsv");
            $sql ="select * from sinhvien where ID = '$ID'";
            // lấy kết quả từ query
            $result= mysqli_query($link, $sql);
            $i = 1;
            if(mysqli_num_rows($result) > 0)
            {
                while ($row = mysqli_fetch_array($result))
                {
                    $ID = $row['ID'];
                    $Name = $row['Name'];
                    $Age = $row['Age'];
                    $University = $row['University'];
                    $Students[$i] = new Entity_student($ID, $Name, $Age, $University);
                    break;
                }
            }
            mysqli_free_result($result);
            mysqli_close($link);
            return $Students;
            
        }
        public function getAllStudent()
        {
            $link = mysqli_connect("localhost:3307","root","") or die ("khong the ket noi");
            // chọn loại kết nối
            mysqli_select_db($link,"qlsv");
            $sql ="select * from sinhvien";
            // lấy kết quả từ query
            $result= mysqli_query($link, $sql);
            $i = 1;
            $Students = Array();
            if(mysqli_num_rows($result) > 0)
            {
                while ($row = mysqli_fetch_array($result))
                {
                    $ID = $row['ID'];
                    $Name = $row['Name'];
                    $Age = $row['Age'];
                    $University = $row['University'];
                    $Students[$i] = new Entity_student($ID, $Name, $Age, $University);
                    $i++;
                }
            }
            mysqli_free_result($result);
            mysqli_close($link);
            return $Students;
        }
    }
?>