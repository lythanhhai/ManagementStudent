import {react} from 'react'

const AllStudent = ({ students }) => {
    
    console.log(students.Name);
    var elementStudent = students.map((student, index) => {
        const {ID, Name, Age, University} = student;
        return(
            <>
                <tr key={index}>
                    <td>{ID}</td>
                    <td>{Name}</td>
                    <td>{Age}</td>
                    <td>{University}</td>
                </tr>
            </>
        );
    });
    return(
        <div className="container bg-light">
            <table class="mt-3 table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">University</th>
                    </tr>
                </thead>
                <tbody>
                    {elementStudent}
                </tbody>
            </table>
        </div>
    )
}

export default AllStudent;
