import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';
export default class Home extends Component {

    homeCardTasks = {
        title: 'Tasks',
        text: 'Manage Tasks',
        action: () => hashHistory.push('/releases')
    }
    homeCardLogin = {
        title: 'Login',
        text: 'Login Here',
        action: () => hashHistory.push('/login')
    }
    homeCardSignup = {
        title: 'Sign Up',
        text: 'Create an Account',
        action: () => hashHistory.push('/signup')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardTasks.title}
                        text={this.homeCardTasks.text}
                        action={this.homeCardTasks.action} />
                    <HomeCard {...this.homeCardLogin} />
                    <HomeCard {...this.homeCardSignup} />
                </div>
            </div>
        );
    }
}
