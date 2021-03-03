import React, { Component } from 'react';

import ToggleShowHide from './ToggleShowHide';



class ListUsers extends Component {

    render() {
        return (
            <React.Fragment>

                <h3>List of users</h3>

                <ol>
                    {
                        // display list of users
                        this.props.users.map((item, index) => (
                            <li key={index}>{item.username} played {item.numberGames} games</li>
                        ))
                    }
                </ol>

                <div>
                    {
                        // display error in case of empty list
                        this.props.users.length === 0 && "There are currently no users listed"
                    }
                </div>

                <ToggleShowHide 
                    numberUsers={this.props.users.length}
                />


            </React.Fragment>
        )
    }
}



export default ListUsers;