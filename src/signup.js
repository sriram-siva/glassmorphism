import './signup.css';

function Sign(){
    return(
        <div className="container2">
          <div className="lists">
            <h1>Sign Up</h1>
            <label htmlFor="uname">Name</label><br></br>
            <input type="text" name="uname" id='namet' placeholder="enter your name"></input><br></br>
            <label htmlFor="mail">Email</label><br></br>
            <input type="email" name="mail" id='mailt' placeholder="enter your mail"></input><br></br>
            <label htmlFor="number">Mobile</label><br></br>
            <input type="text" name="number" id='mobilet' placeholder="enter your number"></input><br></br>
            <label htmlFor="passw">Create Password</label><br></br>
            <input type="password" name="passw" id='passwordt' placeholder="create password"></input> <br></br>
            <button type="submit" id="signbtn">Sign Up</button>     
          </div>  
        </div>
    );
}

export default Sign;