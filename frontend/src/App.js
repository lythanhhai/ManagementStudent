import './App.css';
import SignIn from './Component/SignIn';
import AllStudent from './Component/AllStudent';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { useState } from 'react';
import { history } from 'react'

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
  return (
    <Router>
      <div className="App">
          
          <Link to="/AllStudent" onClick={() => {fetchStudent();}}> Student</Link>
          <Route path="/AllStudent" render={() => (
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