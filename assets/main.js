import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
    
function Main() {
   
    function loginAction(e){
        e.preventDefault();

        const email = e.target.email;
        const password = e.target.password;

        fetch('/api/login', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password : e.target.password.value
            }),
        }).then(response => {
            response.json().then((data) => {
                if(data.message){
                    console.log(data.message);
                    localStorage.setItem('user-info', JSON.stringify(data));
                    document.getElementById('response').innerHTML = 'Login action executed. ' + data.message;
                }
            });
        });

    }

    return (

        <div>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <form method="POST" action="/api/login" onSubmit={loginAction}>
                                    <div className="col-md-12">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input className="form-control" type="email" name="email" placeholder="Email" required></input>
                                    </div>
                                    <div className="col-md-12">
                                    <label htmlFor="password" className="form-label">Password</label>
                                        <input className="form-control" type="password" name="password" placeholder="Password" required></input>
                                    </div>
                                    <div className="form-button mt-3">
                                        <button id="submit" type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </form>
                            </div>
                            <div id="response"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
    
export default Main;

if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);
  
    root.render(
        <StrictMode>
           <Main />     
        </StrictMode>
    );
}