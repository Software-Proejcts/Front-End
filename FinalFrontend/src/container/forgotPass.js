import React, { Component } from "react";

export default class forgotpass extends Component {
    render() {
        return (
            <form>

                <h3>Forgot Password?</h3>
                <p>Enter your email below!</p>
                <div className="form-group">
                    <label>Email</label>
                    <input type="password" className="form-control" placeholder="Enter your Email" />
                </div>
                <button type="submit" className="btn btn-dark btn-lg btn-block">Submit</button>
               
            </form>
        );
    }
}
