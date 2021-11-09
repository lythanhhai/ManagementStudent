import React from "react";
import {useState} from 'react';

const FormInsert = () => {
    const [message, setMessage] = useState('');
    const createStudent = (e) => {
        e.preventDefault();
        const NewID = document.querySelectorAll('input')[0].value;
        const NewName = document.querySelectorAll('input')[1].value;
        const NewAge = document.querySelectorAll('input')[2].value;
        const NewUniversity = document.querySelectorAll('input')[3].value;
        //alert(NewUniversity);
        fetch("http://localhost:8080/Backend/Controller/C_createStudent.php", {
            method: "POST",
            credentials: 'include',   
            body: JSON.stringify({ 
                    ID: NewID,
                    Name: NewName,
                    Age: NewAge,
                    University: NewUniversity,
                }
            ),
        })
        .then(response => {response.json(); alert("A")})
        .then(data => {setMessage(data); alert(data)})
        .catch(err => console.log(err));

    }
    return(
        <>
            <h1>thêm sinh viên</h1>
            <form className="formInsert mt-3" method="post" onSubmit={(e) => {createStudent(e);}}>
                ID: <input type="text" name="ID" />
                <br />
                <br />
                Name: <input type="text" name="Name" />
                <br />
                <br />
                Age: <input type="text" name="Age" />
                <br />
                <br />
                University: <input type="text" name="University" />
                <br />
                <br />
                <input type="submit" name="submit" value="submit" />
            </form>
        </>
    );
}

export default FormInsert;