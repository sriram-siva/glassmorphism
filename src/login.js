import { Link } from 'react-router-dom';
import './log.css';

function Log(){
    return(
        <div className="container">
         <div className="lists">
           <h1>Login Form</h1>
           <label htmlFor="username" id="user">Username</label><br></br>
           <input type="text" name="username" id='usert' placeholder="enter your username"></input><br></br>       
           <label htmlFor="password" id="pass">Password</label><br></br>
           <input type="password" name="password" id='passt' placeholder="enter your password"></input> <br></br>
           <input type="checkbox" name='Remember me?' />Remember me?<br></br>
           <button type="submit"  id='logbtn'> Login</button>
           <p>Don't have an account<Link id='link'to="/sign">Sign up</Link></p>
         </div>               
        </div>
        
    );
} 

export default Log;