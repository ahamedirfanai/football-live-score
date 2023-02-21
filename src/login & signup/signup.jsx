
import React from "react";
import './signup.css';
import profile from'./profile.png';

function App(){
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
                <h1 className="heading">sign Up</h1>
                <div className="cname">
                    <input type="text" placeholder=" Create user name" className="name" />
                </div>
                <div className="cname">
                <input type="email" placeholder="Email id" className="email" />
                </div>
                <div className="cname">
                <input type="password" placeholder="Password" className="password" />
                </div>
                <div className="cname">
                <input type="password" placeholder="Re-type password" className="password" />
                </div>
                <div className="btn">
                <button>Sign Up</button>
                </div>
            </div>
           </div>
        </div>
    </div>
    );
}

export default App;