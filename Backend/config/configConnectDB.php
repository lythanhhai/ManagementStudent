<?php 
    $link = mysqli_connect("localhost:3307","root","") or die ("khong the ket noi");
    // chọn loại kết nối
    mysqli_select_db($link,"qlsv");
?>