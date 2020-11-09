import React, { Component } from 'react';

import ReleaseForm from '../ui/ReleaseForm';

export default class Releases extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Homework 3',
                    releaseAssi: 'Bob',
                    releaseDate: '12/30/2020'
                },
                {
                    id: 2,
                    releaseName: 'Quiz 4',
                    releaseAssi: 'Jill',
                    releaseDate: '11/30/2020'
                },
                {
                    id: 3,
                    releaseName: 'Project 6',
                    releaseAssi: 'Tom',
                    releaseDate: '11/10/2020'
                },
                {
                    id: 4,
                    releaseName: 'Essay 2',
                    releaseAssi: 'Zack',
                    releaseDate: '11/25/2020'
                }
            ]
        }
    }

    handleSubmit(e, {name, assi,date}) {
        e.preventDefault();
        var state = this.state;
        var myRelease = {
            id: state.releases.length + 1,
            releaseName: name,
            releaseAssi: assi,
            releaseDate: date
        }
        this.setState({releases: state.releases.concat(myRelease)});
    }

    handleRemove(id){
        console.log('Implement remove function here!');
        var myReleases = this.state.releases;
        myReleases.splice(id, 1)
        this.setState({releases: myReleases});
    }


    render() {
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <ReleaseForm submitHandler={this.handleSubmit} />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Task Assigned to</th>
                            <th>Task Due Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            const onClickRemove = (e) => {
                                this.handleRemove(index);
                            }
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{release.releaseAssi}</td>
                                    <td>{release.releaseDate}</td>
                                    <td><button type="button" className="btn btn-danger btn-sm" onClick={onClickRemove}>Remove</button></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
