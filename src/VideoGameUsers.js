import React, { Component } from 'react';

import AddUser from './AddUser';
import ListUsers from './ListUsers';



class VideoGameUsers extends Component {



    render() {
        return (
            <React.Fragment>
                <h3>Add User</h3>

                <AddUser />
                <ListUsers />

            </React.Fragment>
        );
    }
}



export default VideoGameUsers;