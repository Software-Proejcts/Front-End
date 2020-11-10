import React, { Component } from "react";
import {Link} from 'react-router';




export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label for ="School">School</label><br></br>
                    <select name="School" id="School">
                    <option value="depaul">DePaul University</option>
                    <option value="uic">UIC</option>
                    <option value="loyola">Loyola University</option>
                    <option value="northwestern">NorthWestern Universiy</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><Link to="/signupt">Register</Link></button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/login">Log in?</Link>
                </p>
            </form>
        );
    }
}
