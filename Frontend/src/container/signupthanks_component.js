import React, { Component } from "react";

export default class signupthanks extends Component {
    render() {
        return (
            <form>

                <h3>Thanks for Signing Up!</h3>
                <p>Click here to Sign in</p>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
               
            </form>
        );
    }
}
