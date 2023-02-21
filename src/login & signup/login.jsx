
import React from "react";
import './signup.css';
import profile from'./profile.png';

function App1(){
    return (
    <div className="main">
        <div className='sub-main'>
           <div>
            <div className="img">
               <div className="container-image">
                  <img className="img1" src={profile} alt="error" />
                
               </div>
            </div>
            <div>
                <h1 className="heading">Login Here</h1>
                <div className="cname">
                    <input type="text" placeholder="User name" className="name" />
                </div>
               
                <div className="cname">
                <input type="password" placeholder="Password" className="password" />
                </div>
              
                <div className="btn">
                <button>Login in</button>
                </div>
             
                    <p className="link">
                        <a href="#">forgot password?</a> Or <a href="#">Sign Up</a>
                    </p>
                
            </div>
           </div>
        </div>
    </div>
    );
}

export default App1;