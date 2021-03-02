import React, { Component } from 'react';

import AddUser from './AddUser';
import ListUsers from './ListUsers';



class VideoGameUsers extends Component {

    // each user should have 'firstname, lastname, username, numberGames'
    state = {
        users: [
            // {
            //     firstname: 'fname1',
            //     lastname: 'lname1',
            //     username: 'uname1', 
            //     numberGames: 1,
            // }, 
            // {
            //     firstname: 'fname2',
            //     lastname: 'lname2',
            //     username: 'uname2', 
            //     numberGames: 2,
            // }, 
            // {
            //     firstname: 'fname3',
            //     lastname: 'lname3',
            //     username: 'uname3', 
            //     numberGames: 3,
            // }
        ]
    }


    addUser = user => {
        this.setState(prevState => ({

            // add new user, as well as maintain previous list via spread operator
            // this assumes all users attributes (first, last, username etc to be present)
            users: [...prevState.users, user]
        }));
    };


    isDuplicate = username => {

        // `Array.some` checks to see if at least one element satisfies the test
        return this.state.users.some(user => user.username === username);
    };


    render() {
        return (
            <React.Fragment>

                <AddUser
                    addUser={this.addUser}
                    isDuplicate={this.isDuplicate}
                />

                <ListUsers
                    users={this.state.users}
                />

            </React.Fragment>
        );
    }
}



export default VideoGameUsers;