import React, { Component } from "react";
export default class Login extends Component {
    render() {
        return (
            <form>

                <h1>Log in</h1>
                <h1>  </h1>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        Remember Me <label for = "chkRemember"></label>
                        <input type = "checkbox"
                            id = "chkRemember"
                            value = "Remember" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
             
                </p>
            </form>
        );
    }
}

