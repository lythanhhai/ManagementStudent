import './App.css';
// import component
import SignIn from './Component/SignIn';
import AllStudent from './Component/AllStudent';
import FormInsert from './Component/FormInsert';
import SearchStudent from './Component/SearchStudent';
//
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { history } from 'react'
import './Asset/style.css';

function App() {
  const redirect = () => {
    history.push("/AllStudent");
  }
  const [students, setStudents] = useState([]);
  const fetchStudent = async () => {
    const response = await fetch("http://localhost:8080/Backend/Controller/C_getAllStudent.php");
    const dataStudents = await response.json();
    const arrayDataStudents = Object.values(dataStudents);
    setStudents(arrayDataStudents);
    console.log(arrayDataStudents);
    // console.log(typeof students);
  }

  useEffect(
    () => {
      fetchStudent();
  });

  return (
    <Router>
      <div className="App">
          
          <Route path="/Home" render={() => (
              <div className="Home">
                <Link to="/AllStudent" onClick={() => {fetchStudent();}}>Get All Student</Link>
                <Link to="/FormInsert" >Create Student</Link>
                <Link to="/RemoveStudent" onClick={() => {fetchStudent();}}>Remove Student</Link>
                <Link to="/SearchStudent" onClick={() => {fetchStudent();}}>Search Student</Link>
                <Link to="/UpdateStudent" onClick={() => {fetchStudent();}}>Update Student</Link>
              </div>
            )}>
          </Route>
          
          <Route path="/FormInsert" render={() => (
              <>
                <FormInsert />
              </>
          )}>
          </Route>

          <Route path="/AllStudent" render={() => (
              <>
                <AllStudent students={students}/>
              </>
          )}>
          </Route>

          <Route path="/RemoveStudent" render={() => (
              <>
                <AllStudent students={students}/>
              </>
          )}>
          </Route>

        <Route path="/SearchStudent" render={() => (
            <>
                <SearchStudent />
            </>
        )}>
        </Route>

        <Route path="/UpdateStudent" render={() => (
            <>
              <AllStudent students={students}/>
            </>
        )}>
        </Route>

          <Route path="/SignIn" render={() => (
              <>
                <SignIn />
              </>
          )}>
          
          </Route>
      </div>
    </Router>
  );
}

export default App;


// <button onClick={() => {fetchStudent()}}>oke</button>