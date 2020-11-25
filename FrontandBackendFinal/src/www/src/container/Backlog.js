import React, {Component}from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
export default class Backlog extends Component {

    render() {
        return (
          <div>
            <h1> Progress Dashboard </h1>
            <p1>Total Tasks Completed</p1>
            <ProgressBar now={60} label={`${60}%`} />
            <div>
              <p1>Tasks Completed by each Member</p1>
              <ProgressBar striped variant="success" now={40} label={`Bob`} />
              <ProgressBar striped variant="info" now={20} label={`Jill`} />
              <ProgressBar striped variant="warning" now={60} label={`Tom`} />
              <ProgressBar striped variant="danger" now={80} label={`Zack`} />
           </div>
          </div>
        );
    }
}
