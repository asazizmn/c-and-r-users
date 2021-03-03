import React, { Component } from 'react';



const ListUsers = props => (
    <React.Fragment>

        <h3>List of users</h3>

        <ol>
            {
                // display list of users
                props.users.map((item, index) => (
                    <li key={index}>{item.username} played {item.numberGames} games</li>
                ))
            }
        </ol>

        <div>
            {
                // display error in case of empty list
                props.users.length === 0 && "There are currently no users listed"
            }
        </div>

    </React.Fragment>
);



export default ListUsers;