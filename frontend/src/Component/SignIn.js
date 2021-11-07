import {react} from 'react';

const SignIn = () => {

    const abc = async () => {
        fetch('http://localhost:8080/Backend/Controller/C_handleSignIn.php')
            .then((response) => {response.json()})
            .then((responseJson) => {
    
            // If server response message same as Data Matched
                if(responseJson === 'Data Matched'){ 
                    alert('Sign in success !');  
                    alert("b");
                }else {
                    alert(responseJson);
                    alert("a");
                }
    
            }).catch((error) => {
                console.log('not work');
                console.log(error);
                console.error(error);
            });
        
    }
    // ,{
    //     method: 'POST',
    //     headers: new Headers({
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //     }), 
          
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const ID = '1';
        fetch('http://localhost:8080/Backend/Controller/C_handleSignIn.php',{
                method: 'POST',
                credentials: 'include',   
                body: JSON.stringify({ 
                    ID: ID, 
                })   
              
        }).then((response) => {response.json()})
            .then((responseJson) => {
    
            // If server response message same as Data Matched
                if(responseJson === 'Data Matched'){ 
                    alert('Sign in succes !');  
                }else {
                    alert(responseJson);
                }
    
            }).catch((error) => {
                console.log('not work');
                console.log(error);
                console.error(error);
            }); 
        // alert("a");
        // const response = await fetch("http://localhost:8080/Backend/Controller/C_handleSignIn.php");
        // const student =  await response.json();
        // alert(student);
        
    }

    return(
        <section className="SignIn container">
            <form onSubmit={(e) => {handleSubmit(e)}} name="signin">
                <div className="mb-3 mt-4 row">
                    <label onClick={() => {abc()}} for="inputPassword" className="col-sm-2 col-form-label">ID User</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputPassword" name="ID"/>
                    </div>
                </div>
                <div className="mt-3 row">
                    <button type="submit" className="col-md-2">Oke</button>
                </div>
            </form>
        </section>
    );
}

export default SignIn;
