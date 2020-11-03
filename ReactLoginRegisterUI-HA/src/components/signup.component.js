import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const options = [
    'DePaul University'
];
const defaultOption =Option[0];
export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h1>Register</h1>

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
                    <label>School</label>
                  <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block"><Link to="/signupt">Register</Link></button>
                <p className="forgot-password text-right">
                    Already registered <Link to="/sign-in">Log in?</Link>
                </p>
            </form>
        );
    }
}